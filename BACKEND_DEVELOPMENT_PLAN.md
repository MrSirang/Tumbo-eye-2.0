# Tumbo Eye 2.0 — Backend Development Plan

**Purpose:** Step-by-step guide of what you need to build the Tumbo backend.  
**Important:** This document is planning only. Do **not** integrate backend into the frontend until this plan is approved.

**Frontend today:** Static Vite + React marketing site. Forms and Tumiso AI currently show “Coming Soon” (no real API).

**Repo:** https://github.com/MrSirang/Tumbo-eye-2.0

---

## 1. Project Goal (Backend)

Build a secure API and admin system that supports:

1. Contact & newsletter submissions  
2. Opportunities listing and management  
3. Resources / downloads  
4. Tumiso AI chat & recommendations  
5. User accounts & verified profiles (phase 2)  
6. Partners & success stories CMS (phase 2)  
7. Admin dashboard for Tumbo team  

---

## 2. Recommended Tech Stack

| Layer | Recommendation | Why |
|---|---|---|
| Runtime | **Node.js (LTS)** | Fits team + JS/TS frontend |
| API framework | **NestJS** or **Express + TypeScript** | NestJS = structure; Express = faster start |
| Database | **PostgreSQL** | Reliable relational data (users, opportunities, inquiries) |
| ORM | **Prisma** | Easy schema + migrations |
| Auth | **JWT + refresh tokens** (or Auth0 / Clerk later) | Standard for SPA + API |
| File storage | **AWS S3 / Cloudflare R2 / Supabase Storage** | PDFs, images, resource files |
| Email | **Resend / SendGrid / Mailgun** | Contact + newsletter |
| AI | **OpenAI API** or **Azure OpenAI** | Tumiso chat + recommendations |
| Hosting | **Railway / Render / AWS / DigitalOcean** | API + DB |
| Admin panel | **Custom React admin** or **Retool / Forest Admin** | Content management |

**Alternative (faster MVP):** Supabase (Postgres + Auth + Storage) + Edge Functions.

---

## 3. What Must Be Dynamic vs Can Stay Static

### Stay static (for now)
- Home / About / Ecosystem marketing copy  
- Trust bar, CTAs, partner logo strips  
- Office address, Instagram, Play Store links  
- Most legal placeholder pages until legal content is final  

### Must become dynamic
- Contact form submissions  
- Newsletter subscriptions  
- Opportunities (list, filter, apply links)  
- Resources / downloads  
- Tumiso AI chat  
- Success stories (when real content exists)  
- Partner directory (when ready)  
- User login / profile (phase 2)  

---

## 4. Step-by-Step Backend Roadmap

### Phase 0 — Setup (Week 1)
**Goal:** Empty but production-ready backend project.

**Do this:**
1. Create a new repo (e.g. `Tumbo-eye-backend`) — keep frontend and backend separate.  
2. Initialize API project (NestJS/Express + TypeScript).  
3. Connect PostgreSQL.  
4. Set up Prisma + first migration.  
5. Configure environment variables (`.env.example`).  
6. Add CORS for frontend domain (`localhost:5173` + Vercel URL).  
7. Deploy a health endpoint: `GET /api/health`.  
8. Document API base URL for frontend later.

**Deliverable:** Running API that returns `{ status: "ok" }`.

---

### Phase 1 — Lead Capture APIs (Week 1–2)
**Goal:** Make Contact + Newsletter real.

#### A) Contact Inquiry
Frontend fields already exist:
- name, email, phone, subject, message, terms agreement

**API needed:**
- `POST /api/contact`
- `GET /api/admin/contact` (admin only, later)

**Backend must:**
- Validate required fields + email format  
- Store inquiry in DB  
- Send email notification to `support@tumbo.co.za`  
- Optional auto-reply to user  
- Return success/error JSON  

#### B) Newsletter
- `POST /api/newsletter/subscribe`
- Store email + source (`footer` / `resources`)  
- Prevent duplicate emails  
- Optional double opt-in  

**Deliverable:** Contact + newsletter work end-to-end (test with Postman first).

---

### Phase 2 — Opportunities CMS (Week 2–4)
**Goal:** Replace hardcoded opportunities with database content.

**Entities:**
- Opportunity  
  - title, description, category  
  - location, featured, status (`draft` / `published`)  
  - externalApplyUrl, popularityScore  
  - createdAt, updatedAt, publishedAt  

**Categories (from frontend):**
- Employment  
- Scholarships  
- Internships  
- Grants  
- Events  

**APIs:**
- `GET /api/opportunities` (public, with filters: category, search, sort)  
- `GET /api/opportunities/:id`  
- `POST /api/admin/opportunities`  
- `PUT /api/admin/opportunities/:id`  
- `DELETE /api/admin/opportunities/:id`  

**Also need:**
- Admin auth for Tumbo staff  
- Ability to mark Featured  
- External apply URL support (DSV, Mr D style links)  

**Deliverable:** Admin can publish opportunities; public API returns them.

---

### Phase 3 — Resources & Downloads (Week 3–5)
**Goal:** Real file delivery instead of “Coming Soon”.

**Entities:**
- Resource (title, type, category, description, tags)  
- FileAsset (storage key, mime type, size, download count)  

**APIs:**
- `GET /api/resources`  
- `GET /api/resources/:id`  
- `GET /api/resources/:id/download` (signed URL or streamed file)  
- Admin CRUD endpoints  

**Need:**
- Object storage bucket  
- Secure download links (no public open bucket)  
- Optional download tracking  

**Deliverable:** Resources page can list and download real files.

---

### Phase 4 — Tumiso AI Backend (Week 4–7)
**Goal:** Real AI chat + recommendations.

**APIs:**
- `POST /api/ai/chat` — send message, get reply  
- `GET /api/ai/sessions/:id` — chat history  
- `GET /api/ai/recommendations` — opportunities / learning suggestions  

**Backend must:**
- Create/store chat sessions + messages  
- Call LLM provider (OpenAI/Azure)  
- Add Tumbo system prompt (community, opportunities, South Africa context)  
- Optionally retrieve opportunities/resources (RAG) before answering  
- Rate-limit requests  
- Never expose API keys to frontend  

**Safety:**
- Content moderation  
- “Not legal/medical advice” disclaimer  
- Logging for quality review  

**Deliverable:** Tumiso page chats with real AI responses.

---

### Phase 5 — Users & Auth (Week 6–9)
**Goal:** Profiles, login, personalized matching.

**Entities:**
- User (email, passwordHash / OAuth, role)  
- Profile (name, phone, location, skills, qualifications, verificationStatus)  
- SavedOpportunity  

**APIs:**
- `POST /api/auth/register`  
- `POST /api/auth/login`  
- `POST /api/auth/refresh`  
- `GET /api/me`  
- `PUT /api/me/profile`  
- `POST /api/me/saved-opportunities/:id`  

**Roles:**
- `user` (citizen / community member)  
- `partner` (optional later)  
- `admin` (Tumbo staff)  

**Deliverable:** Users can register, login, save opportunities.

---

### Phase 6 — Partners, Stories, Legal CMS (Week 8–10)
**Goal:** Manage content that is currently hardcoded/placeholder.

**Entities:**
- Partner  
- SuccessStory / MediaAsset  
- LegalDocument (Privacy, Terms versions)  

**APIs:** Public read + Admin CRUD  

**Deliverable:** Team can update partners/stories/legal without redeploying frontend.

---

### Phase 7 — Admin Dashboard (parallel from Phase 2)
**Goal:** Internal tool for Tumbo team.

**Admin screens needed:**
1. Dashboard (inquiry counts, opportunity stats)  
2. Contact inquiries inbox  
3. Newsletter list/export  
4. Opportunities manager  
5. Resources manager  
6. AI chat logs (read-only)  
7. Users & verification (phase 5+)  
8. Partners / stories / legal  

**Access:** Admin login only, strong password + optional 2FA.

---

## 5. Database Entities (Core)

Start with these tables:

1. `users`  
2. `profiles`  
3. `contact_inquiries`  
4. `newsletter_subscribers`  
5. `opportunities`  
6. `resources`  
7. `resource_files`  
8. `chat_sessions`  
9. `chat_messages`  
10. `partners`  
11. `success_stories`  
12. `legal_documents`  
13. `admin_audit_logs`  

---

## 6. Environment Variables You Will Need

Create `.env.example` in backend:

```env
NODE_ENV=development
PORT=4000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/tumbo
JWT_SECRET=change-me
JWT_REFRESH_SECRET=change-me
CORS_ORIGIN=http://localhost:5173,https://your-vercel-app.vercel.app
SMTP_API_KEY=
SMTP_FROM=noreply@tumbo.co.za
CONTACT_TO_EMAIL=support@tumbo.co.za
OPENAI_API_KEY=
STORAGE_BUCKET=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
STORAGE_REGION=
```

Never commit real secrets to GitHub.

---

## 7. API Design Rules (Agree Early)

1. Base path: `/api/...`  
2. JSON only  
3. Consistent error format:
   ```json
   { "success": false, "message": "Validation failed", "errors": [] }
   ```
4. Pagination for lists: `?page=1&limit=20`  
5. Auth via `Authorization: Bearer <token>`  
6. Versioning later if needed: `/api/v1/...`  

---

## 8. Security Checklist

- [ ] Input validation on every endpoint  
- [ ] Rate limiting (especially contact + AI)  
- [ ] Helmet / secure headers  
- [ ] CORS whitelist  
- [ ] Password hashing (bcrypt/argon2)  
- [ ] SQL injection protection (Prisma)  
- [ ] File type/size limits for uploads  
- [ ] Signed download URLs  
- [ ] Secrets in env only  
- [ ] HTTPS in production  
- [ ] Admin audit logs  

---

## 9. Suggested Folder Structure (Backend)

```text
tumbo-eye-backend/
  src/
    modules/
      auth/
      users/
      contact/
      newsletter/
      opportunities/
      resources/
      ai/
      partners/
      stories/
      admin/
    common/
      guards/
      filters/
      dto/
    prisma/
      schema.prisma
  .env.example
  README.md
```

---

## 10. Integration Order With Frontend (Later)

When backend is ready, integrate in this order:

1. Contact form → `POST /api/contact`  
2. Newsletter → `POST /api/newsletter/subscribe`  
3. Opportunities page → `GET /api/opportunities`  
4. Resources → list + download APIs  
5. Tumiso AI chat → `POST /api/ai/chat`  
6. Auth/profile pages  
7. Admin dashboard  

Until then, frontend can remain static.

---

## 11. Team Roles Needed

| Role | Responsibility |
|---|---|
| Backend developer | APIs, DB, auth, AI wiring |
| Frontend developer | Connect APIs later |
| Product / Tumbo ops | Content, opportunity publishing |
| DevOps | Hosting, domains, secrets |
| Legal | Privacy/Terms final text |
| AI prompt owner | Tumiso tone + safety rules |

---

## 12. MVP Definition (What to Build First)

**Minimum backend to go live with real functionality:**

1. Health check  
2. Contact form API + email notify  
3. Newsletter subscribe  
4. Opportunities public list + admin create/edit  
5. Basic admin login  

**Then:**
6. Resources downloads  
7. Tumiso AI chat  
8. User registration/login  

---

## 13. Estimated Effort (Rough)

| Phase | Effort |
|---|---|
| Setup + Contact + Newsletter | 3–7 days |
| Opportunities + Admin CRUD | 1–2 weeks |
| Resources + storage | 3–7 days |
| Tumiso AI | 1–2 weeks |
| Full user auth + profiles | 1–2 weeks |
| Partners/Stories/Legal CMS | 1 week |
| Hardening + deploy + docs | 3–5 days |

*(Depends on 1 developer full-time vs part-time.)*

---

## 14. Decisions You Should Make Before Coding

Answer these first:

1. **Stack:** NestJS or Express? Supabase or custom Postgres?  
2. **Hosting:** Where will API + DB live?  
3. **Email provider:** Resend / SendGrid / other?  
4. **AI provider:** OpenAI or Azure?  
5. **Domain:** e.g. `api.tumbo.co.za`?  
6. **Who are admins?** Names/emails for first admin accounts  
7. **Data residency:** Hosted in South Africa preferred? (matches product message)  
8. **MVP scope:** Contact + Opportunities only, or include AI in first release?  

---

## 15. Immediate Next Actions (No Frontend Integration Yet)

1. Create backend GitHub repository.  
2. Choose stack from Section 2.  
3. Fill decisions in Section 14.  
4. Build Phase 0 (setup + health).  
5. Build Phase 1 (contact + newsletter).  
6. Test with Postman/Insomnia.  
7. Only after that, plan frontend API integration.

---

## 16. Out of Scope for Now

- Do **not** rewrite frontend to call APIs yet  
- Do **not** put OpenAI keys in frontend  
- Do **not** store passwords in plain text  
- Do **not** use local file storage for production downloads  

---

**Document status:** Ready for discussion and approval.  
**Next step after approval:** Start backend repo + Phase 0 setup.

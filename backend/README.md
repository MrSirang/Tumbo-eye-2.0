# Tumbo Eye API + Opportunities CMS

## Stack
- ASP.NET Core 8
- PostgreSQL (Neon / local)
- EF Core + JWT admin auth
- Static admin panel at `/admin/`

## Quick start

```bash
cd backend/TumboEye.Api
dotnet restore
dotnet tool install --global dotnet-ef   # if needed
dotnet ef database update
dotnet run --urls http://localhost:5000
```

Open:
- API health: http://localhost:5000/api/health
- Swagger (Development): http://localhost:5000/swagger
- **Admin panel:** http://localhost:5000/admin/

### Default admin (seeded on startup)
- Email: `admin@tumbo.co.za`
- Password: `TumboAdmin2026!`

Change these via config `Admin:Email` / `Admin:Password` (user-secrets recommended).

## Connection string (Neon)

Do **not** commit real passwords. Set with user-secrets:

```bash
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=YOUR_HOST;Database=neondb;Username=YOUR_USER;Password=YOUR_PASSWORD;SSL Mode=Require;Trust Server Certificate=true"
dotnet user-secrets set "Jwt:Secret" "a-long-random-secret-at-least-32-characters"
```

## Public APIs
- `GET /api/opportunities?page=1&limit=12&location=&category=&search=`
- `GET /api/opportunities/{idOrSlug}`

## Admin APIs (Bearer JWT, role Admin)
- `GET/POST /api/admin/opportunities`
- `GET/PUT/DELETE /api/admin/opportunities/{id}`
- `PATCH /api/admin/opportunities/{id}/status`
- `POST /api/admin/media` (image upload)

## Frontend
Footer → **Admin Panel** opens the CMS.  
Opportunities page loads published records from the API (falls back to demo cards if the API is empty/offline).

# Tumbo Eye — .NET Backend

ASP.NET Core 8 Web API with **Entity Framework Core** and **PostgreSQL** for user authentication.

> **Note:** Drizzle ORM is for Node.js/TypeScript only. For .NET we use **EF Core**, which is the standard PostgreSQL ORM for this stack.

## Features

- Email/password **sign up** and **sign in**
- **Google OAuth** (frontend sends Google ID token; backend verifies and issues JWT)
- PostgreSQL `users` table with unique email and Google ID
- JWT tokens for authenticated sessions
- Swagger UI in development

## Prerequisites

1. [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
2. [PostgreSQL](https://www.postgresql.org/download/) (local or hosted)
3. [Google Cloud OAuth Client ID](https://console.cloud.google.com/apis/credentials) (Web application)

## Setup

### 1. Install .NET 8 SDK

Download and install from Microsoft if `dotnet --version` is not recognized.

### 2. Create PostgreSQL database

```sql
CREATE DATABASE tumbo_eye;
```

### 3. Configure secrets

Edit `TumboEye.Api/appsettings.Development.json` (or use User Secrets):

| Setting | Description |
|---------|-------------|
| `ConnectionStrings:DefaultConnection` | PostgreSQL host, port, database, username, password |
| `Jwt:Secret` | Random string, **at least 32 characters** |
| `Google:ClientId` | Google OAuth Web Client ID |
| `Cors:AllowedOrigins` | Frontend URL(s), e.g. `http://localhost:5173` |

### 4. Run the API

```powershell
cd backend/TumboEye.Api
dotnet restore
dotnet run
```

API runs at **http://localhost:5000**  
Swagger: **http://localhost:5000/swagger**

On first run, EF Core applies migrations and creates the `users` table automatically.

## API Endpoints

| Method | Path | Body |
|--------|------|------|
| `POST` | `/api/auth/register` | `{ fullName, email, phone?, password, confirmPassword }` |
| `POST` | `/api/auth/login` | `{ email, password }` |
| `POST` | `/api/auth/google` | `{ idToken }` |

Success response:

```json
{
  "token": "eyJ...",
  "user": {
    "id": "...",
    "fullName": "...",
    "email": "...",
    "phone": null,
    "authProvider": "Email"
  }
}
```

## Google OAuth setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials
2. Create **OAuth 2.0 Client ID** → Application type: **Web application**
3. Authorized JavaScript origins: `http://localhost:5173`
4. Copy **Client ID** into both:
   - Backend: `Google:ClientId` in appsettings
   - Frontend: `VITE_GOOGLE_CLIENT_ID` in `.env`

## Frontend connection

The React app uses `VITE_API_URL` (default `/api` via Vite proxy in dev).

See root `.env.example` for frontend environment variables.

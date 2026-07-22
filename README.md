# Meklit Girmaw — Portfolio

A personal developer portfolio with a MERN-based admin CMS: public site (Home, About, Projects, Project detail, Contact) backed by an Express + MongoDB API, with a session-authenticated `/admin` dashboard for managing projects, content, and contact messages.

## Tech Stack

**Frontend** (repo root): React 19 + Vite, React Router, Framer Motion, Axios, Tailwind CSS.
**Backend** (`server/`): Node.js + Express, MongoDB + Mongoose, [Better Auth](https://www.better-auth.com) for admin sessions, Zod validation, Cloudinary for image uploads, Helmet/CORS/rate-limiting.

## Project Structure

```
.
├── src/                 # Frontend (Vite root)
│   ├── pages/            # Public pages + admin pages
│   ├── components/       # Shared UI + admin-only components
│   ├── layout/            # Navbar, Footer, PublicLayout, AdminLayout
│   ├── context/            # ThemeContext
│   ├── hooks/               # useSiteContent
│   └── lib/                  # api.js (Axios client), authClient.js (Better Auth client)
├── server/               # Backend (separate package.json, deploys independently)
│   └── src/
│       ├── models/         # Project, Message, SiteContent (Mongoose)
│       ├── routes/          # /api/projects, /api/contact, /api/content, /api/dashboard, /api/uploads
│       ├── controllers/
│       ├── middleware/       # requireAdmin, validate (Zod), error handling
│       ├── lib/                # auth.js (Better Auth config), cloudinary.js
│       └── seed/                # One-time data seeding scripts
└── vercel.json           # SPA rewrite for the frontend deploy
```

## Prerequisites

- Node.js 20+
- A MongoDB database (MongoDB Atlas free tier works fine — enable "Allow access from anywhere" under Network Access for simplicity in dev)
- A [Cloudinary](https://cloudinary.com) account (free tier) for project image uploads
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) if you want contact-form email notifications

## Setup

### 1. Install dependencies

```bash
npm install                  # frontend, from repo root
npm --prefix server install  # backend
```

### 2. Configure environment variables

Copy both example files and fill in real values:

```bash
cp .env.example .env
cp server/.env.example server/.env
```

See `server/.env.example` for the full list — at minimum you need `MONGODB_URI`, `BETTER_AUTH_SECRET` (any long random string), and `ADMIN_EMAIL`/`ADMIN_PASSWORD` to seed the admin account. Cloudinary and Gmail vars are optional in dev (uploads/emails will just fail gracefully without them).

### 3. Seed the database

This creates the single admin account (via Better Auth's own API — there is no public sign-up route) and seeds initial projects/content:

```bash
npm --prefix server run seed
```

This is idempotent — re-running it will not overwrite an existing admin account. **After the first successful run, remove `ADMIN_PASSWORD` from `server/.env`** (it's only needed for that one seed run); keep `ADMIN_EMAIL` since it's also used by `requireAdmin` to identify the admin session.

### 4. Run the dev servers

```bash
npm run dev:all
```

This runs the Vite dev server (`:5173`) and the Express API (`:5000`) together. Vite proxies `/api/*` requests to Express, so the browser only ever talks to one origin and the Better Auth session cookie stays same-origin in dev.

If Vite ever picks a different port (e.g. `5174`, because `5173` was already in use), the backend still accepts it — `CLIENT_ORIGIN` in `server/.env` is a comma-separated list; add any additional dev port you see Vite report.

Visit `http://localhost:5173/admin/login` and sign in with the admin credentials you seeded.

## Building for production

```bash
npm run build            # frontend -> dist/
npm --prefix server run start   # backend (no build step; runs directly)
```

Deploy the frontend (`dist/`) and `server/` as separate services (e.g. Vercel for the frontend, Railway/Render for the backend). Set `VITE_API_URL` (frontend) to the deployed backend URL, and `CLIENT_ORIGIN`/`BETTER_AUTH_URL` (backend) to your deployed frontend/backend URLs respectively — use `https://` URLs in production so Better Auth marks the session cookie `Secure`.

## Notes

- There is no public registration route — the only way to create an admin account is the seed script above.
- Rate limiting is active on `/api/auth/*` (sign-in) and `/api/contact` (public message submission).
- No blog feature is implemented — it was scoped as "only if asked" and hasn't been requested yet.

## License

MIT

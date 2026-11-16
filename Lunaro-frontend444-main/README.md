# Lunaro Website + Admin CMS

The existing Lunaro React + Vite + TypeScript website is retained. The sample portfolio projects are no longer displayed; the portfolio is populated from the admin dashboard.

## Features
- Arabic/English public website, responsive layout and original design.
- Admin dashboard at `/admin/`.
- Server-side password verification and signed HTTP-only session cookie.
- Vercel Blob persistence for CMS JSON and uploaded images/audio/CSS.
- Manage portfolio projects, custom content sections, promotional offers, external links/icons, background audio player, and custom CSS theme.
- JSON content export/import backup.

## Deploy to Vercel
1. Upload the extracted project folder to a GitHub repository.
2. Import the repository into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. In Vercel Storage, create a Blob store and connect it to this Vercel project. This adds `BLOB_READ_WRITE_TOKEN`.
4. In Project Settings > Environment Variables add:
   - `ADMIN_PASSWORD`: your private admin password.
   - `SESSION_SECRET`: a long random secret (32+ characters).
   - `BLOB_READ_WRITE_TOKEN`: automatically added when Blob is connected; verify it exists.
5. Redeploy after adding variables.
6. Open `https://YOUR-DOMAIN/admin/` and sign in.

## Local development
`npm install` then `npm run dev`. The `/api` endpoints require the Vercel runtime and a connected Blob token; test the full admin flow on a Vercel deployment (`vercel dev` can also be used after installing the Vercel CLI).

## Security notes
- Never put `ADMIN_PASSWORD`, `SESSION_SECRET`, or `BLOB_READ_WRITE_TOKEN` in any `VITE_` variable or frontend code.
- Do not commit `.env` files. `.env.example` contains placeholders only.
- The admin session is HTTP-only, Secure, SameSite=Strict and expires after 12 hours.
- CSS files are trusted administrator uploads. Only upload CSS you have reviewed; CSS can visually spoof content or load external resources. This system does not execute uploaded JavaScript.
- Uploaded files are limited to 8 MB and restricted to images, audio, and CSS.
- For production, enable Vercel deployment protection or rate limiting/WAF for the login endpoint if the site receives substantial traffic.

## Admin routes
- `/admin/` dashboard
- `/api/login`, `/api/logout`, `/api/session`
- `/api/state` public read-only CMS content
- `/api/save` authenticated content update
- `/api/upload` authenticated Blob upload

## Content behavior
The portfolio starts empty. Add actual portfolio entries from the dashboard. Offers, custom sections, links, music player and custom CSS are rendered on the public site after saving. The original main site copy and existing static sections remain intact.

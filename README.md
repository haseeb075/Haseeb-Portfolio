# Haseeb portfolio (Next.js 14 + Tailwind + shadcn/ui + Framer Motion)

1. `npm install && npm run dev`
2. Add your photo as `public/haseeb.jpg` (front-facing, head and shoulders).
3. Edit `app/data.ts`: set LinkedIn/GitHub URLs, refine project text.
4. Add more shadcn components any time: `npx shadcn@latest add dialog tabs`.

## Deploy + custom domain
Vercel: push to GitHub → vercel.com/new → import → Deploy → Settings > Domains > add yourname.com, then set the DNS records Vercel shows.
Netlify: push to GitHub → Add new site → import → build `npm run build` (Next runtime auto-detected) → Domain management > Add custom domain.

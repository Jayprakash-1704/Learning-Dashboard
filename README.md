Next-Gen Learning Dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## What It Implements

This prototype uses a server component to fetch live course data from Supabase and passes the result into a motion-heavy client dashboard. The layout is semantic and responsive, with a desktop sidebar, tablet icon rail behavior, and a mobile bottom navigation bar. Course cards animate in with staggered entrance timing, hover elevation uses transforms only, and the progress bars animate from zero without causing layout shifts.

## Data Setup

1. Create a Supabase project.
2. Run the SQL in [supabase/schema.sql](supabase/schema.sql).
3. Copy [.env.example](.env.example) to `.env.local` and fill in the Supabase values.

The app falls back to mock data when the Supabase env vars are missing, which keeps the UI usable during local review.

## Architecture Notes

- Server fetching happens in [src/lib/dashboard-data.ts](src/lib/dashboard-data.ts).
- The App Router page stays server-rendered and wraps the dashboard in Suspense for loading states.
- Client-only Framer Motion components live under [src/components](src/components).
- Error handling is handled by [src/app/error.tsx](src/app/error.tsx), which offers a retry action.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the dashboard by modifying [src/app/page.tsx](src/app/page.tsx) and the components under [src/components](src/components).

## Supabase Env Vars

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Notes

- The dashboard uses mock fallback data if Supabase is not configured.
- If the database connection fails after configuration, the error boundary displays a retry card.
- The mobile nav is placed at the bottom of the viewport to preserve the bento layout on smaller screens.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

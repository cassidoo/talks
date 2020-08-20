# Next.js

---

## It is a _framework_ built with React

---

## Vercel builds it

^ Latest version is Next.js 9.4, which came out in May, the version before was in March

---

## Why does Next.js exist?

---

## Why does Next.js exist?

- Speed up initial page load
- Improving SEO

^ It was originally emphasized to be an SSR-first framework by the Vercel team. They have since changed their tune, and are leaning a LOT more into Jamstack and SSG.

---

## What features should I know about?

---

## Developer Experience
## Nice-to-Haves

---

## Developer Experience Nice-to-Haves

- Hot code reloading
- Styling options
- TypeScript support
- Environment variables built-in
- Automatic code splitting

^ Developers don't have to separately set up hot code reloading (which is the latest version of React Fast Refresh, which we can get into if folks want), all of the most popular styling options, code splitting (meaning pages only load the JS they need), or any of the others. They just work.

---

## Routing

^ The entire routing structure is filesystem-based. If you add a file in the pages directory, it is automatically a route.

^ It also does something called Shallow Routing, meaning you can change the URL without calling data fetching methods again.

---

## The API

---

## The API

- `next/link`
- `next/head`
- `next/router`
- `next/amp`

---

## Performance Measurement

^ The team worked with Google to build in a relayer that allows you to analyze and measure performance of pages using different metrics. This can be pushed to Google Analytics or any other measurement service.

---

## Performance Measurement

- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

---

## Performance Measurement

- Hydration
- Route change to render
- Render

^ Time for a page to start and finish hydrating, time for starting render after route change, and time for finishing said render

---

## The CLI

---

## The CLI

- `next build`
- `next dev`
- `next start`
- `next export`

^ Create production builds, run in dev mode, run in prod mode after building, export to static

---

## Custom Configuration

---

## Custom Configuration

`next.config.js`

^ This is a regular JS module that non-Next.js devs can pick up quickly, because it acts just like a webpack module, which is common across other frameworks. It also lets you customize the build directories, setting up optimization benefits, add extensions, etc.

---

## Why would I use this over Gatsby?

---

## **It depends**

---

## What about using it on Netlify?

---

## What about using it on Netlify?

- Static apps work perfectly
- SSRed apps _need a little help_
- Some newer features (preview mode and incremental static generation) require SSR

---

## _next-on-netlify_

^ This is a third party library that's pretty actively maintained, and takes care of almost all of these issues through Netlify functions.

---

## Starting a Next.js project

github.com/cassidoo/next-netlify-starter

---

## **Questions?**
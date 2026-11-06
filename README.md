# ziyad.club — ball engine (branch `ball-engine`)

This branch is separate from `main` (the old Next.js site). It holds one static page: the "Dark Chrome Mirror Ball" engine, unchanged, full screen with a tweak panel. No build step, no dependencies.

- `site/index.html` — the page
- `vercel.json` — tells Vercel to serve `site/` as a static site (overrides any Next.js preset on the project)

## Deploy on Vercel

New project: vercel.com/new → import `ziyadashraf/clubziyad` → Settings → Git → Production Branch: `ball-engine` → Redeploy → Settings → Domains → add `ziyad.club`.

Existing project already linked to this repo: open the `ball-engine` preview deployment → "Promote to Production" (or set Production Branch to `ball-engine`).

## Using it

- Opens on the hero look (black chrome, dark room). Preset menu also has the purple studio state saved on the canvas.
- Drag the ball to spin it. Click "Tweak" for every engine setting (118), grouped like the canvas Tweaks.
- A dot next to a setting means it's changed; click its name to reset just that one.
- Copy link: shares your exact settings (stored in the URL hash). Copy JSON: all values, ready to paste into hero/ball.ts.
- Settings are also remembered in your browser.
- `?clean` hides the panel and labels, e.g. ziyad.club/?clean#… for a pure showcase link.
- Page → Resolution lowers render resolution on slow devices; "Fit ball on phones" keeps the ball inside a portrait screen.

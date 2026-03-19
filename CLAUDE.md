# Astragaloi.store — Project Notes

## What This Is

Single-page static website for ancient Greek knucklebone divination (astragalomancy).
Sells a 44-page PDF booklet via Gumroad. Newsletter via Buttondown. Hosted free on GitHub Pages.

---

## Stack

- Pure HTML/CSS/JS — no framework, no build step
- Hosted: GitHub Pages → https://github.com/visjble/astragaloi (branch: `main`)
- Domain: `astragaloi.store` — registered via Squarespace, DNS pointed to GitHub Pages
- Booklet sales: Gumroad
- Newsletter: Buttondown (username: astragaloi)
- Email: Proton Mail + ImprovMX forwarding for `@astragaloi.store`

---

## File Structure

```
astragaloi/
├── index.html       ← single-page site, all 5 sections
├── style.css        ← all styles (Cormorant Garamond, charcoal/gold palette)
├── script.js        ← oracle throw logic, 35-entry oracle table
├── CNAME            ← astragaloi.store
├── .gitignore       ← ignores *.docx, *.pdf
└── CLAUDE.md        ← this file
```

Source files kept out of git: `astragalos_booklet_v2.docx`, `astragalos_booklet_v2.pdf`, `proton-recovery-kit.pdf`

---

## Design

- Background: `#1a1814` (deep charcoal)
- Accent: `#c9a84c` (aged gold), `#b85c38` (terracotta)
- Text: `#f0ead6` (warm off-white)
- Font: Cormorant Garamond (Google Fonts CDN) — display + body
- Grain texture overlay via SVG feTurbulence

---

## Oracle Logic

4 astragaloi, each landing on one of four faces:
- κῷος = 1 (concave, "the dog")
- χῖος = 3 (convex)
- πλευρός = 4 (flat broad side)
- ὕπτιος = 6 (back, most favorable)

Values sorted and joined as key (e.g. `"1,3,4,6"`) → looked up in `ORACLE` object in `script.js`.
35 unique combinations, each mapped to a deity and prophecy.

---

## DNS (Squarespace → GitHub Pages)

A records for `@`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
CNAME: `www` → `visjble.github.io`

---

## Things That Need a Manual Visit

- [ ] Upload `astragalos_booklet_v2.pdf` to Gumroad, set price, update link in `index.html`
      (search for `visjble.gumroad.com/l/astragaloi`)
- [ ] Confirm Buttondown form works — test subscribe at `#newsletter`
- [ ] Confirm ImprovMX forwarding is live for `@astragaloi.store`
- [ ] GitHub Pages: Settings → Pages → confirm custom domain + Enforce HTTPS
- [ ] After DNS propagates: visit https://astragaloi.store and verify

---

## Git

```bash
git add <files>
git commit -m "message"
git push          # pushes to origin/main
```

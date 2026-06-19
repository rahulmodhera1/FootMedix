# Logo & image assets

Files in this `public/` folder are served from the site root, e.g.
`public/logo.png` → `/logo.png`.

## Logo

`public/logo.png` is shown in the header and footer. The site styles it
automatically:

- **Header** (light background): the logo is rendered solid **black**.
- **Footer** (dark background): the logo is rendered solid **white**.

This is done with a CSS filter, so the logo always matches the black-and-white
theme regardless of the colour of the source file. To replace it, just upload a
new `public/logo.png` (a transparent PNG works best).

## Chiropodist photos (team section)

To show real photos in the "Our Chiropodists" section, add:

```
public/team/radha.jpg     → Radha Modhera
public/team/emily.jpg     → Emily
```

Until those files exist, the site shows each chiropodist's initials in a styled
circle, so the section always looks finished.

- Format: square JPG or PNG (e.g. 600×600), head-and-shoulders works best.
- Different filename? Update the `src` values in `app/page.js`
  (`<Avatar src="/team/radha.jpg" ... />`).

## Uploading via GitHub (no command line)

1. Open the repository on GitHub and navigate into `public` (or `public/team`).
2. Click **Add file → Upload files**.
3. Drag in your file(s) and commit to the
   `claude/wizardly-cannon-8e39p7` branch.

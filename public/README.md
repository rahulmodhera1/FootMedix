# Logo & static assets

Files in this `public/` folder are served from the site root.
For example, `public/logo.png` is available at `/logo.png`.

## Upload your logo here

1. Add your logo file to this folder and name it exactly:

   ```
   public/logo.png
   ```

   (A `.png` with a **transparent background** looks best on the dark
   navigation bar. An `.svg` works too — see note below.)

2. That's it. The site automatically picks up `/logo.png` in the header and
   footer. No code changes are needed.

Until a `logo.png` is present, the site shows a styled gold "FootMedix"
wordmark as a fallback, so nothing ever appears broken.

### Recommended specs

- Format: **PNG with transparent background** (or SVG)
- Height: around **120–200px** (it is displayed at ~48–52px tall and scales down crisply)
- Keep some padding around the artwork so it isn't cropped

### Want to use an SVG instead of PNG?

Add `public/logo.svg`, then change the `src` in
`app/components/Logo.js` from `/logo.png` to `/logo.svg`.

## Uploading via GitHub (no command line)

1. Open the repository on GitHub and navigate into the `public` folder.
2. Click **Add file → Upload files**.
3. Drag in your `logo.png` and commit to the
   `claude/wizardly-cannon-8e39p7` branch.

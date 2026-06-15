# Vibe Reader MVP

Static Web/PWA demo for turning long videos into Vibe Reader style insight cards.

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload or push all files in this folder to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Save and wait for GitHub Pages to publish.

The public URL will usually be:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Local preview

```powershell
python -m http.server 8792
```

Then open:

```text
http://127.0.0.1:8792/index.html
```

## Notes

- The app uses relative paths, so it works under a GitHub Pages repository subpath.
- `.nojekyll` is included so GitHub Pages serves files exactly as provided.
- For full PWA install behavior, use the HTTPS GitHub Pages URL.

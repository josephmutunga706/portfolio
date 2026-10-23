# Joseph Ndung’u Mutunga: Portfolio (React + TypeScript + Vite)

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/

## Edit content
Everything you will normally change is in `src/data.ts` (profile, stats, services, about, projects, blog posts).
Add images to `public/images/` and reference them with `img("file.jpg")`.

## Deploy on GitHub Pages
Push this project to the `main` branch of your repo. In the repo go to Settings > Pages > Source: **GitHub Actions**.
The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically.

# Zihou Ren

A dark, typography-led academic homepage built with Jekyll and deployed to GitHub Pages. The redesign takes visual inspiration from the [April 17, 2025 archive of rennesis.com](https://web.archive.org/web/20250417200351/https://rennesis.com/): restrained monochrome, quiet typography, and a two-column composition. All page code is local; no Framer runtime is used.

## Content

- `_data/profile.yml`: identity, biography, email, GitHub, and CV links.
- `_data/research.yml`: research descriptions and submission status. Submitted work is explicitly labeled and should be updated as its status changes.
- `_data/projects.yml`: selected original public GitHub repositories. Descriptions and archive status were checked on October 27, 2026; the page does not call the GitHub API at runtime.
- `_data/experience.yml`: internships.
- `index.html`: education, teaching, service, and section structure.
- `assets/files/`: English and Chinese CV PDFs copied from `../resume/resume.en.pdf` and `../resume/resume.zh.pdf`.

The initial content comes from the active English résumé source in `../resume/resume.en.tex`. Commented-out résumé material is not included. To update the downloadable CVs, rebuild the résumé and replace the corresponding PDFs here.

## Design

`assets/css/home.css` contains the responsive layout. `assets/js/home.js` highlights the current section while scrolling; navigation, links, and the earlier-research disclosure also work without JavaScript. The page includes keyboard focus states, a skip link, reduced-motion support, and print styles. The 404 page shares the same design.

DM Sans and JetBrains Mono are self-hosted variable WOFF2 fonts, sourced from the [Google Fonts repository](https://github.com/google/fonts). Both are free, open-source fonts under the SIL Open Font License 1.1; their licenses are included in `assets/fonts/`. The homepage makes no third-party font, script, stylesheet, or analytics requests.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`. To check a production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
```

## Deployment

The existing `.github/workflows/pages.yml` builds and publishes on pushes to `main` and supports manual runs. GitHub Pages must use **GitHub Actions** as its build source. The canonical site URL is `https://renzihou.github.io/`.

Optional legacy blog/publication/showcase listing pages remain excluded in `_config.yml`. The original site's [academic-homepage](https://github.com/luost26/academic-homepage) MIT license is retained in `LICENSE`.

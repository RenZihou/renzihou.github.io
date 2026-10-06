# Zihou Ren

Personal academic homepage built from [academic-homepage](https://github.com/luost26/academic-homepage), upstream commit `2fb6806256f4331cf8eb4de5dac6869fc5064d84`.

The template's example profile, contact links, portraits, affiliations, authors, publications, news, blog posts, and showcase content have been removed. The original MIT license is preserved in `LICENSE`.

## GitHub Pages

The site is configured for `https://renzihou.github.io/` with an empty `baseurl`.

In this repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The `Deploy GitHub Pages` workflow builds and publishes the site on every push to `main`; it can also be run manually from the Actions tab.

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

## Add content

- Edit `_data/profile.yml` to add your own biography, portrait, affiliations, or links. Leave unused optional values null (a key followed by a colon with no value).
- Enable homepage sections in `_data/display.yml` after adding content.
- Add news to `_news/`, publications to `_publications/`, posts to `_posts/`, and showcase entries to `_showcase/` as needed.
- To publish an optional listing page, remove it from `exclude` in `_config.yml` and add it to `_data/navigation.yml`.

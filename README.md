# databricks-test

A single contact page built with Gatsby 5, Tailwind CSS 3 and styled-components. The form uses GSAP for the submit transition and rejects Gmail addresses with native constraint validation.

The page lives at `/contact/`. There is no index page, so `/` shows the Gatsby 404 page.

## Requirements

- Node.js 18 or 20 (tested on Node 20.20). `.nvmrc` pins Node 20.
- npm 9 or later

## Install

```shell
npm ci
```

## Run

Development server with hot reload:

```shell
npm run develop
```

Then open http://localhost:8000/contact/

Production build and local preview:

```shell
npm run build
npm run serve
```

Then open http://localhost:9000/contact/

## Project structure

- `src/pages/contact.js`: the contact page
- `src/components/Form/`: form component and its styled-components styles
- `src/styles/global.css`: Tailwind entry point
- `tailwind.config.js`: custom colors and max width

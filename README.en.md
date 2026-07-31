<div align="center">
  <img src="./public/favicon.svg" alt="Portfolio icon" width="72" height="72" />

  # Portfolio — Abyner Rocha

  Personal portfolio of a back-end developer, built to showcase experience, projects, and contact details through a responsive, code-inspired interface.

  [Português](./README.md) · [English](./README.en.md)
</div>

## About the project

This repository contains the source code for my personal portfolio. The application combines a professional introduction, information about me, featured projects, and contact channels in a single-page experience available in Portuguese and English.

The design uses a dark color palette, developer-oriented typography, and responsive components for desktop and mobile devices.

## Features

- Responsive layout for desktop and mobile devices.
- Portuguese and English content powered by i18next.
- Section-based navigation with active-section indication.
- Code-inspired professional introduction.
- Featured project with imagery, features, technologies, and repository link.
- Project cards prepared to support multiple projects.
- Contact section with email, GitHub, and LinkedIn.
- Custom favicon based on the portfolio's visual palette.

## Technologies

| Technology | Purpose |
| --- | --- |
| React 19 | User interface development |
| TypeScript | Type safety and application development |
| Vite | Development environment and production build |
| Tailwind CSS 4 | Styling and responsive layout |
| TanStack Router | File-based routing |
| i18next | Internationalization |
| Lucide and React Icons | Interface icons |
| Biome | Formatting and static analysis |

## Project structure

```text
new-portfolio/
├── locales/                 # Portuguese and English translations
├── public/                  # Images and favicon
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar/
│   │   ├── Project/
│   │   └── Sections/
│   ├── routes/              # TanStack Router routes
│   ├── utils/               # Project data and utilities
│   ├── i18n.ts              # Language configuration
│   └── styles.css           # Theme and global styles
├── index.html
└── vite.config.ts
```

## Getting started

### Prerequisites

- Node.js installed.
- Yarn Classic installed.

### Installation

```bash
git clone https://github.com/AbynerRocha/portfolio.git
cd portfolio
yarn install
```

### Development

```bash
yarn dev
```

Vite will start the application on port `3000`.

### Production build

```bash
yarn build
```

### Preview the build

```bash
yarn preview
```

## Available scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Starts the development environment |
| `yarn build` | Creates the production build |
| `yarn preview` | Serves a preview of the production build |
| `yarn lint` | Analyzes the code with Biome |
| `yarn format` | Formats the code with Biome |
| `yarn check` | Runs Biome checks |
| `yarn generate-routes` | Updates the generated route tree |

## Customization

- Edit project data in `src/utils/projects.ts`.
- Update copy in `locales/pt-br.json` and `locales/en.json`.
- Change colors and fonts in the `@theme` block inside `src/styles.css`.
- Replace images and the favicon inside `public/`.

## Contact

- GitHub: [AbynerRocha](https://github.com/AbynerRocha)
- LinkedIn: [Abyner Rocha](https://linkedin.com/in/abynerrocha/)
- Email: [abynerr.rocha@gmail.com](mailto:abynerr.rocha@gmail.com)

---

<div align="center">
  Developed by <a href="https://github.com/AbynerRocha">Abyner Rocha</a>.
</div>

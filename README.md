# Kay Tu Portfolio

A bilingual (中文 / English) professional portfolio focused on AI, technology, product and research.

## Edit content

- Homepage and labels: `lib/site-data.ts`
- About page: `components/about-page.tsx`
- Project case studies: `content/projects/*.md`
- Contact placeholders: `components/site-shell.tsx`
- CV: replace `public/cv/README.md` with `public/cv/Kay_Tu_CV.pdf`

Each project has an English (`.en.md`) and Chinese (`.zh.md`) file. Keep the frontmatter fields at the top and edit the Markdown sections below them.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` are automatically built and deployed with GitHub Pages through the included workflow.

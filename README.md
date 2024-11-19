# Astro Resume

A modern, minimal, and customizable resume/blog website built with Astro v4 and TailwindCSS.

## 🚀 Features

- **Framework & Styling**
  - Astro v4
  - TailwindCSS utility classes
  - ESLint / Prettier pre-installed and pre-configured
  - Dark / Light mode using Tailwind and CSS variables (referenced from shadcn)

- **Performance & SEO**
  - Accessible, semantic HTML markup
  - Responsive & SEO-friendly
  - [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimized images
  - Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

- **Content Management**
  - MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
  - Pagination
  - [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
  - [Expressive Code](https://expressive-code.com/) source code and syntax highlighter

## 🛠️ Quick Start

```bash
# Clone this repository
git clone [your-repo-url]

# Navigate to the project
cd astro-resume

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📂 Project Structure

```text
├── public/
├── src/
    ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
|   ├── pages/
|   ├── styles/
|   ├── utils/
|   ├── site.config.ts
│   └── types.ts
├── .elintrc.cjs
├── .gitignore
├── .prettierignore
├── package.json
├── prettier.config.cjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 📝 Customization Guide

### Site Configuration
- Edit site info (title, description) in `src/site.config.ts`

### Content Management
- **Resume Homepage**: Edit `src/pages/index.astro`
- **Blog Posts**: Add `.md` files to `src/content/`
- **Blog Images**: Create a folder in `src/content/`, add both `.md` and image files, reference images in markdown

### Component Customization
- **Page Components**: Edit files in `src/components/`
- **Base Layout**: Modify `src/layouts/BaseLayout.astro`
- **Blog Post Layout**: Update `src/layouts/BlogPost.astro`

### Theming
1. **Colors**: Edit `src/styles/app.css`
2. **Fonts**: 
   - Add font files to `/public`
   - Define `@font-face` in `src/styles/app.css`
   - Add to `fontFamily` in `tailwind.config.js`
   - Apply in `body` tag of `src/layouts/BaseLayout.astro`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💐 Credits

This project draws inspiration from:
- [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) for blog design
- [minirezume-framer](https://minirezume.framer.website/) for resume homepage design

## 📄 License

This project is licensed under the [MIT] License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ using [Astro](https://astro.build)
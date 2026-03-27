# Beth Ashcroft — Portfolio Website

A developer portfolio designed to look and feel like the Cursor IDE, built with React, TypeScript, and Next.js.

## Preview

The site mimics a code editor layout with:
- An activity bar for navigation
- Tabbed file views (`readme.md`, `projects.tsx`, `about.tsx`, `skills.tsx`, `contact.tsx`)
- A status bar footer
- A monospace, dark-themed UI inspired by Cursor IDE

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **Contact Form:** EmailJS
- **UI Components:** Radix UI

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
├── app/
│   ├── CursorIDE/
│   │   ├── ActivityBar.tsx    # Side navigation
│   │   ├── TabBar.tsx         # File tabs
│   │   ├── StatusBar.tsx      # Bottom status bar
│   │   ├── CursorLayout.tsx   # Main layout wrapper
│   │   └── content/
│   │       ├── ReadmeMd.tsx    # About/intro page
│   │       ├── ProjectsTsx.tsx # Projects showcase
│   │       ├── AboutTsx.tsx    # Background & experience
│   │       ├── SkillsTsx.tsx   # Technical skills
│   │       └── ContactTsx.tsx  # Contact form
│   ├── layout.tsx
│   └── globals.css
```

## Features

- **Star Projects** section with gold glow effect to highlight recent/best work
- **Older Projects** section for earlier builds
- Responsive design
- Custom favicon
- Contact form with email integration

## Deployment

Built for deployment on Vercel or Netlify.

## Author

**Beth Ashcroft** — Software Developer

- [GitHub](https://github.com/Bethashcroft)
- [LinkedIn](https://www.linkedin.com/in/bethany-ashcroft-5b12b3180/)

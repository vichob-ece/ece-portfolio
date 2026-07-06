# ECE Portfolio

A clean, professional portfolio website for ECE students. Built with Next.js, TypeScript, and Tailwind CSS. Deployable on Vercel in minutes.

---

## Quick Start

### 1. Prerequisites

Make sure you have **Node.js 18+** installed. Check with:
```bash
node --version
```
Download Node.js from https://nodejs.org if needed.

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000 in your browser. The site hot-reloads as you edit files.

---

## Personalizing the Site

### Update your name and links

Search the project for `Your Name`, `yourusername`, `yourprofile`, and `your@email.com` and replace them with your real info. The files to edit are:

| File | What to change |
|------|----------------|
| `app/layout.tsx` | Page `<title>` and meta description |
| `app/page.tsx` | Name, headline, intro paragraph, button links |
| `app/about/page.tsx` | Bio, university, graduation year |
| `components/Navbar.tsx` | Site name in top-left |
| `components/Footer.tsx` | Footer links |
| `app/contact/page.tsx` | Contact link values and hrefs |

### Add your resume

Replace `public/resume.pdf` with your actual resume PDF. Keep the filename the same, or update the `href` in `app/resume/page.tsx`.

---

## Editing Projects

**All project data lives in one file: `data/projects.ts`**

To add a new project, copy an existing project object and paste it at the bottom of the array:

```typescript
{
  slug: "my-new-project",       // becomes the URL: /projects/my-new-project
  title: "My New Project",
  summary: "One sentence describing what this project is.",
  skills: ["Python", "Oscilloscope", "MATLAB"],
  type: "Class Project",        // see options below
  featured: false,              // set true to show on homepage
  githubUrl: "https://github.com/...",  // optional

  // Detail page fields (fill in when you write up the project):
  objective: "...",
  background: "...",
  myRole: "...",
  designProcess: "...",
  results: "...",
  lessonsLearned: "...",
  images: ["/images/my-project-fig1.png"],  // place files in /public/images/
}
```

**Project type options:**
- `"Class Project"`
- `"Lab"`
- `"Research"`
- `"Personal Project"`
- `"Team Project"`

**To add images:** Place image files in `public/images/` and reference them as `"/images/filename.png"` in the `images` array.

---

## File Structure

```
ece-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer wrap every page)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── projects/
│   │   ├── page.tsx        # All projects grid
│   │   └── [slug]/page.tsx # Individual project case study
│   ├── resume/page.tsx     # Resume download page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx          # Top navigation
│   ├── Footer.tsx          # Footer
│   ├── ProjectCard.tsx     # Card used in project grids
│   └── SectionHeading.tsx  # Consistent section titles
├── data/
│   └── projects.ts         # ← Edit this file to manage all projects
└── public/
    └── resume.pdf          # ← Replace with your resume
```

---

## Push to GitHub

### First time setup
```bash
# In the project folder:
git init
git add .
git commit -m "Initial portfolio"
```

Then create a new repository on GitHub (https://github.com/new), then:
```bash
git remote add origin https://github.com/yourusername/ece-portfolio.git
git branch -M main
git push -u origin main
```

### After making changes
```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `ece-portfolio` repository
4. Leave all settings as defaults — Vercel auto-detects Next.js
5. Click **"Deploy"**

Your site will be live at `https://ece-portfolio-yourusername.vercel.app` within ~1 minute.

**Auto-deploys:** Every time you `git push` to `main`, Vercel automatically rebuilds and deploys the updated site.

---

## Making Changes After Deployment

Edit files → `git add . && git commit -m "..." && git push` → Vercel redeploys automatically. That's it.
# ece-portfolio

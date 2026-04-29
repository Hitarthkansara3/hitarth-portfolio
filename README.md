# Hitarth Kansara - Premium Personal Portfolio

A world-class, modern, and recruiter-friendly personal portfolio website built to showcase skills, projects, and experience in **Data Science, AI/ML, Python Development, and Full Stack Development**.

This project is designed with a premium startup-style UI using glassmorphism, gradient accents, smooth animations, and a fully responsive layout.

## Live Vision
This portfolio is crafted to feel like a high-end product landing page while still being easy to edit and deploy.

## Tech Stack
- React.js + Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons + React Icons
- JavaScript (ES6+)

## Core Features
- Premium dark-mode-first UI with light mode toggle
- Sticky glassmorphism navbar with smooth section navigation
- Fullscreen hero section with animated typing roles
- About section with profile details and stat cards
- Skills section with animated progress bars and category cards
- Experience timeline for internship/professional history
- Featured projects with:
  - category filters (AI / Web / Analysis)
  - premium project cards
  - project detail modal popup
- GitHub stats-style section (placeholder cards for API integration)
- Certifications section
- Contact section with social links and working mail form flow
- Back-to-top button
- Scroll progress indicator
- Loading screen animation
- Cursor glow interaction
- SEO meta tags included
- Fully responsive (mobile/tablet/desktop)

## Project Structure
```bash
src/
  assets/
  components/
    BackToTop.jsx
    Container.jsx
    CursorGlow.jsx
    LoadingScreen.jsx
    Navbar.jsx
    ProjectModal.jsx
    ScrollProgress.jsx
    SectionHeading.jsx
  data/
    content.js
  sections/
    AboutSection.jsx
    CertificationsSection.jsx
    ContactSection.jsx
    ExperienceSection.jsx
    FooterSection.jsx
    GithubSection.jsx
    HeroSection.jsx
    ProjectsSection.jsx
    SkillsSection.jsx
  App.jsx
  index.css
  main.jsx
public/
  resume-hitarth-kansara.pdf
  vite.svg
index.html
tailwind.config.js
postcss.config.js
vite.config.js
```

## Getting Started
### 1. Clone Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## How to Edit Portfolio Content
Most of your editable content is centralized here:
- `src/data/content.js`

You can update:
- name and resume link
- hero roles and intro
- about details and stats
- skills and progress values
- experience timeline content
- projects (title, description, stack, links)
- GitHub profile URL
- certifications
- contact details and social links

## Add Your Profile Image
1. Place your image in `src/assets/` (example: `profile.jpg`)
2. Import it in `src/sections/HeroSection.jsx`
3. Replace placeholder block with image tag

Example:
```jsx
import profileImage from "../assets/profile.jpg";

<img
  src={profileImage}
  alt="Hitarth Kansara"
  className="h-full w-full rounded-xl object-cover"
/>
```

## Resume Setup
Replace this file with your actual resume:
- `public/resume-hitarth-kansara.pdf`

Keep the filename same (or update the URL in `src/data/content.js`).

## Deploy on Vercel
1. Push this project to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import your repository
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

## Accessibility + Performance Notes
- Semantic sections and structured headings
- Smooth scrolling and responsive spacing
- Lightweight component structure
- Fast Vite-based build pipeline


## Author
**Hitarth Kansara**
- GitHub: [https://github.com/Hitarthkansara3](https://github.com/Hitarthkansara3)
- LinkedIn: [https://www.linkedin.com/in/hitarth-kansara-078b82366](https://www.linkedin.com/in/hitarth-kansara-078b82366)
- Email: hitarthkansara1912@gmail.com

---
If you like this portfolio, feel free to fork it and customize it for your own journey.


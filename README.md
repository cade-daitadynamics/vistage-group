# Vistage Member Directory

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Railway](https://img.shields.io/badge/Railway-Deployed-0B0D0E?style=flat-square&logo=railway)](https://railway.app/)

A professional member directory website for a Denver Vistage peer advisory group. Built to showcase 10 accomplished business leaders at a networking event for ~70 CEOs and business owners.

## Live Demo

🔗 **[View Live Site](https://your-app.railway.app)** _(Add your Railway URL here)_

## Screenshot

![Vistage Member Directory Screenshot](screenshot.png)
_(![alt text](<Screenshot 2026-01-06 at 12.02.24.png>))_

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Railway](https://railway.app/)

## Features

- **Responsive Grid Layout** — 3 columns on desktop, 2 on tablet, 1 on mobile
- **Expandable Member Cards** — Click to reveal full details, services, and contact links
- **Professional Design** — Clean light theme with navy and gold accents
- **Real Headshots** — Member photos with initials fallback
- **Mobile-Friendly** — Optimized for all device sizes
- **Fast Loading** — Static generation for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/vistage.git
cd vistage

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
vistage/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles & Tailwind imports
├── components/
│   ├── Hero.tsx          # Hero section with title
│   ├── MemberCard.tsx    # Expandable member card
│   ├── MemberGrid.tsx    # Responsive grid layout
│   └── Footer.tsx        # Footer with Vistage info
├── data/
│   └── members.json      # Member profile data
├── lib/
│   └── types.ts          # TypeScript interfaces
└── public/
    └── headshots/        # Member headshot images
```

## Deployment

### Deploy to Railway

1. Push your code to a GitHub repository

2. Go to [Railway](https://railway.app/) and create a new project

3. Select **"Deploy from GitHub repo"** and connect your repository

4. Railway will auto-detect Next.js. Verify these settings:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`

5. Click **Deploy** and wait for the build to complete

6. Once deployed, click **"Generate Domain"** to get your public URL

### Environment Variables

No environment variables are required for basic deployment.

## Author

**Pop Kwasau**

- GitHub: [@PopSensei](https://github.com/PopSensei)
- LinkedIn: [popkwasau](https://linkedin.com/in/popkwasau)

---

Built with Next.js and Tailwind CSS for a Denver Vistage peer advisory group.

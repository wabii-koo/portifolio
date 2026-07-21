# Welebe Kebede — Personal Portfolio

> A modern, high-performance developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features a stunning dark UI with violet accent colors, animated tech stack, live project showcases, and a fully functional contact form powered by Resend.

---

## ✨ Live Features

- 🎨 **Premium Dark UI** — Deep violet `#a78bfa` accent palette with ambient glow effects, glassmorphism cards, and smooth micro-animations
- ⚡ **Hero Section** — Animated floating tech orbit badges, a live code terminal, and smooth CTA buttons
- 👤 **About Section** — Profile photo, tabbed timeline for Education, Certificates & Experience, and a CV download button
- 🛠️ **Skills Section** — 26 branded tech icons with neon hover glows, filterable by category (Frontend, Backend, Database, Tools)
- 🗂️ **Projects Section** — Featured project spotlights (GuardianGate, Irreecha) with live screenshots + a responsive project grid
- 📬 **Contact Form** — Real email delivery to `webiikoo@gmail.com` via Resend API with server-side validation
- 📄 **CV Download** — Downloadable PDF from the Navbar, Hero, and About sections
- 🌐 **SEO Optimized** — Semantic HTML, descriptive meta tags, and structured headings
- 📱 **Fully Responsive** — Mobile-first layout with animated hamburger menu

---

## 🗂️ Project Structure

```
portifolio/
├── app/
│   ├── api/
│   │   └── contact/        # Resend email API route
│   │       └── route.ts
│   ├── globals.css         # Design system tokens (colors, glows, animations)
│   ├── icon.png            # Browser tab favicon (profile photo)
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page assembling all sections
├── components/
│   ├── Navbar.jsx          # Fixed navigation with smooth scroll + Download CV button
│   ├── Hero.jsx            # Animated hero with tech orbit + code terminal
│   ├── About.jsx           # Profile photo, Education/Certificates/Experience tabs
│   ├── Projects.jsx        # Featured spotlights + project grid cards
│   ├── Skills.jsx          # Filterable icon grid with neon glow effects
│   ├── Contact.jsx         # Contact form with Resend API integration
│   └── Footer.jsx          # Footer with social links
└── public/
    ├── welebe.png          # Profile photo
    ├── welebe-cv.pdf       # Downloadable CV
    ├── guardiangate.png    # GuardianGate project screenshot
    ├── irreecha-site.png   # Irreecha Cultural website screenshot
    ├── taskmanager.png     # Task Management System screenshot
    └── ...
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18.0.0`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/wabii-koo/portifolio.git
cd portifolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact Form Setup (Resend)

The contact form requires a [Resend](https://resend.com) API key to send real emails to your inbox.

1. Sign up at [resend.com](https://resend.com) and create a free API key
2. Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=webiikoo@gmail.com
```

3. Restart the development server — the form will now deliver messages directly to your inbox.

> ⚠️ **Important:** Never commit `.env.local` to version control. It is already listed in `.gitignore`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + Vanilla CSS |
| **Email** | Resend API |
| **Hosting** | Vercel |
| **Icons** | Devicons CDN |
| **Version Control** | Git + GitHub |

---

## 📁 Featured Projects

| Project | Tech | Link |
|---|---|---|
| **GuardianGate** – Parent-school communication platform | Next.js, PostgreSQL, JWT | [Live Site](https://digital-school-eight.vercel.app/) |
| **Irreecha Cultural Website** – Heritage platform | HTML5, CSS3, JavaScript | [Live Site](https://irreacha-site-jces.vercel.app/) |
| **Task Management System** – Full-stack RBAC app | Laravel 10, React, Vite, JWT | [Live](https://task-management-system-three-mocha.vercel.app/) \| [GitHub](https://github.com/wabii-koo/task-management-system) |
| **Book Review Platform** – Supabase-powered CRUD | Next.js, Supabase, PostgreSQL | [GitHub](https://github.com/wabii-koo/project) |
| **Round Robin GUI** – CPU Scheduling Simulator | Java, Swing, OOP | [GitHub](https://github.com/wabii-koo) |

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌍 Deployment

This portfolio is optimized for **Vercel**. To deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Add the environment variables in Vercel's dashboard:
   - `RESEND_API_KEY` → your Resend API key
   - `CONTACT_EMAIL` → `webiikoo@gmail.com`
4. Click **Deploy** — done!

---

## 📞 Contact

**Welebe Kebede**

- 📧 Email: [webiikoo@gmail.com](mailto:webiikoo@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/welebe-kebede](https://linkedin.com/in/welebe-kebede)
- 🐙 GitHub: [github.com/wabii-koo](https://github.com/wabii-koo)
- 📍 Location: Addis Ababa, Ethiopia

---

<div align="center">
  <sub>Designed & built by Welebe Kebede · 2026</sub>
</div>

# Evoc Labs

Evoc Labs is an AI-powered full-stack commerce platform that helps eCommerce and D2C brands build, operate, and scale their businesses from a single dashboard. It unifies store infrastructure, analytics, logistics intelligence, AI calling agents, and growth automation into one ecosystem.

---

# Table of Contents

- [About](#about)
- [Core Features](#core-features)
- [Who This Is For](#who-this-is-for)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack-example)
- [Getting Started](#getting-started-for-this-repo)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

# About

Evoc Labs provides a unified, AI-powered infrastructure for running your entire eCommerce operation — from storefront to ads to orders — in one place.

The platform focuses on fixing bottlenecks, improving conversions, and enabling profitable, scalable growth for eCommerce and D2C brands.

---

# Core Features

## Store Building & Conversion Optimization
Create and optimize high-converting storefronts and funnels tailored for D2C and eCommerce brands.

## Sales, Logistics & Ads Analytics
Get a unified view of performance across sales, fulfillment, and campaigns for better decision-making.

## AI Calling Agents
Automate follow-ups, COD confirmations, and customer calls using AI-powered calling systems.

## WhatsApp & Cart Recovery
Recover abandoned carts and re-engage customers via WhatsApp automation and smart recovery flows.

## Growth Tools & Automation
Use growth experiments, rules, and automations to scale profitably while reducing manual work.

## Single Dashboard Operations
Manage store, logistics, communication, and performance from one central dashboard.

---

# Who This Is For

Evoc Labs is designed for:

- D2C brands looking to scale profitably without building a large in-house tech and ops team.
- eCommerce businesses that want to centralize their store, data, and operations.
- Founders and marketers who need a performance-driven partner focused on outcomes rather than just tools.

---

# How It Works

At a high level, Evoc Labs:

1. Connects to your store and ad platforms to centralize data across sales, marketing, and logistics.
2. Analyzes performance bottlenecks in funnels, delivery rates, and campaigns using analytics and heuristics.
3. Applies AI-powered tools for calling, recovery, and automation to plug leaks and improve conversions.
4. Provides a single, actionable dashboard for monitoring performance and running experiments.

> This repository is intended to host the source code and configuration for the `evoclabs.com` marketing/product website, not the entire internal platform.

---

# Tech Stack (Example)

> Adjust this section based on your actual implementation.

- **Frontend:** React / Next.js, TypeScript
- **Styling:** Tailwind CSS or styled-components
- **Forms & Demo Booking:** Integration with your preferred CRM or form backend
- **Deployment:** Vercel / Netlify / AWS / other cloud provider
- **Analytics:** Google Analytics / Meta Pixel / other tracking tools

---

# Getting Started (For This Repo)

## Clone the Repository

```bash
git clone https://github.com/<your-org>/evoclabs.com.git
cd evoclabs.com
```

## Install Dependencies

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

Open your browser at:

```txt
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` (or equivalent) file in the project root.

Example:

```env
NEXT_PUBLIC_SITE_URL=https://www.evoclabs.com
NEXT_PUBLIC_ANALYTICS_ID=<your_analytics_id>
NEXT_PUBLIC_META_PIXEL_ID=<your_meta_pixel_id>
CRM_API_KEY=<your_crm_api_key>
```

> Do not commit environment files to version control.

---

# Folder Structure

Example structure for a Next.js/React-based marketing site:

```txt
.
├── public/              # Static assets (images, icons, OG images)
├── src/
│   ├── pages/           # Page routes (Home, Demo, Careers, Terms, etc.)
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Shared layouts and shells
│   ├── styles/          # Global styles or Tailwind config
│   └── lib/             # Utilities, API wrappers, helpers
├── .env.local           # Local environment variables (ignored)
├── package.json
├── README.md
└── next.config.js       # Or equivalent framework config
```

## Suggested Pages

- `/` — Landing page describing the platform and value proposition.
- `/demo` — Demo booking page for brands to request a walkthrough.
- `/careers` — Careers page with information about working at Evoc Labs.
- `/terms` — Terms of service and scope of services.

---

# Development

- Use feature branches for new sections or components.
- Follow your team’s coding standards (linting, formatting, commit messages).
- Run linting and tests before pushing:

```bash
npm run lint
npm run test
```

- Use code review via pull requests before merging to `main`.

---

# Deployment

- Configure the `main` branch to auto-deploy to your hosting provider (e.g., Vercel).
- Ensure environment variables are configured in the hosting dashboard.

After deployment, validate:

- Page load speed and Core Web Vitals
- All forms (contact, demo, careers) submit correctly
- Analytics and pixels fire as expected

---

# Contact

For questions about Evoc Labs or this website:

- **Website:** https://www.evoclabs.com
- **Email:** contact@evoclabs.com
- **Phone:** +91 9548833953

For partnership or platform-related queries, use the contact or demo form on the site.

---

# License

```txt
Copyright (c) Evoc Labs. All rights reserved.

This repository is proprietary and not open-source.
Unauthorized copying, modification, or distribution of this code
is strictly prohibited without prior written consent.
```

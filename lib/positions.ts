export interface Position {
  slug: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  type: string;
  team: string;
  skills: string[];
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatYouLearn: string[];
}

export const positions: Position[] = [
  {
    slug: "full-stack-developer-internship",
    title: "Full Stack Developer Internship",
    category: "Tech",
    location: "Remote",
    duration: "4 Months",
    type: "Internship (Unpaid)",
    team: "Engineering",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    summary: "Join our engineering team to build and ship features across the EVOC Labs commerce platform — from store dashboards to analytics and AI-driven automation.",
    about: "As a Full Stack Developer Intern, you'll work shoulder-to-shoulder with senior engineers on production code that powers real Indian D2C brands. This isn't a sit-on-the-sidelines role — you'll own features end to end, from UI to API, and watch your work go live for actual customers.",
    responsibilities: [
      "Build responsive, high-performance interfaces with Next.js, React & Tailwind CSS",
      "Develop and integrate REST APIs and backend services with Node.js",
      "Collaborate on feature design, code reviews, and shipping to production",
      "Debug, profile, and optimize performance across the full stack",
      "Work with databases and third-party integrations (payments, logistics, AI)"
    ],
    requirements: [
      "Solid understanding of JavaScript / TypeScript and modern React",
      "Hands-on experience building projects with Next.js",
      "Familiarity with Git and collaborative development workflows",
      "Strong problem-solving skills and attention to detail",
      "Available for a full-time, 4-month remote commitment"
    ],
    niceToHave: [
      "Experience with Node.js / Express backends",
      "Exposure to databases like PostgreSQL or MongoDB",
      "Interest in AI integrations and workflow automation",
      "A portfolio of shipped side projects"
    ],
    whatYouLearn: [
      "Shipping production-grade code in a fast-paced startup",
      "Full-stack architecture used by real eCommerce brands",
      "Working with modern tooling and AI-powered workflows",
      "Direct mentorship and code reviews from senior engineers"
    ]
  },
  {
    slug: "backend-developer-internship",
    title: "Backend Developer Internship",
    category: "Tech",
    location: "Remote",
    duration: "3–6 Months",
    type: "Internship (Unpaid)",
    team: "Engineering",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs", "JWT"],
    summary: "Build and scale the backend services that power live e-commerce products — APIs, databases, auth, and performance.",
    about: "EVOC Labs is building innovative e-commerce technology that helps brands launch, manage, and scale their online businesses. As a Backend Developer Intern, you'll gain hands-on startup experience working on real-world products — designing APIs, modeling data, and shipping reliable backend services to production.",
    responsibilities: [
      "Develop and maintain scalable backend applications using Node.js and Express.js",
      "Design and implement RESTful APIs",
      "Integrate and manage databases using PostgreSQL and MongoDB",
      "Work with Prisma ORM for database modeling and queries",
      "Collaborate with frontend developers to ensure seamless API integration",
      "Optimize application performance, security, and reliability",
      "Debug, test, and maintain backend services",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "Basic to intermediate knowledge of Node.js and Express.js",
      "Understanding of REST APIs and backend architecture",
      "Experience with PostgreSQL and MongoDB",
      "Familiarity with Prisma ORM",
      "Knowledge of authentication systems such as JWT",
      "Understanding of Git and GitHub workflows",
      "Strong problem-solving and debugging skills",
      "Willingness to learn and work in a fast-paced startup environment"
    ],
    niceToHave: [
      "Experience with Docker",
      "Knowledge of database optimization and indexing",
      "Familiarity with cloud platforms such as AWS, DigitalOcean, or Vercel",
      "Understanding of microservices architecture"
    ],
    whatYouLearn: [
      "Real-world backend development experience on live production systems",
      "Mentorship from experienced developers",
      "Internship Completion Certificate based on performance",
      "Potential opportunity for a paid role based on performance"
    ]
  },
  {
    slug: "frontend-developer-internship",
    title: "Front-End Developer Internship",
    category: "Tech",
    location: "Remote",
    duration: "3–6 Months",
    type: "Internship (Unpaid)",
    team: "Engineering",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git"],
    summary: "Turn UI/UX designs into fast, responsive, production web apps with React and Next.js on live products.",
    about: "EVOC Labs is building the future of e-commerce by helping brands launch, scale, and manage their online businesses through innovative technology. As a Front-End Developer Intern, you'll work on live projects — converting designs into functional pages, integrating APIs, and shipping polished, performant interfaces.",
    responsibilities: [
      "Develop responsive and user-friendly web applications using React.js and Next.js",
      "Convert UI/UX designs into functional web pages",
      "Integrate frontend applications with backend APIs",
      "Optimize application performance and ensure cross-browser compatibility",
      "Collaborate with designers, backend developers, and product teams",
      "Debug and resolve frontend issues",
      "Write clean, maintainable, and scalable code"
    ],
    requirements: [
      "Basic to intermediate knowledge of React.js and Next.js",
      "Understanding of JavaScript (ES6+), HTML5, CSS3, and responsive design",
      "Experience with REST API integration",
      "Familiarity with Git and GitHub",
      "Strong problem-solving skills and willingness to learn",
      "Ability to work independently and meet deadlines"
    ],
    niceToHave: [],
    whatYouLearn: [
      "Hands-on experience working on real-world projects",
      "Collaboration with experienced developers and startup founders",
      "Exposure to modern web development practices and technologies",
      "Internship Completion Certificate based on performance",
      "Potential opportunity for a paid role based on performance"
    ]
  },
  {
    slug: "data-analyst-internship",
    title: "Data Analyst Internship",
    category: "Tech",
    location: "Remote",
    duration: "3–6 Months",
    type: "Internship (Unpaid)",
    team: "Data & Analytics",
    skills: ["SQL", "Python (Pandas)", "Excel / Google Sheets", "Power BI / Tableau", "Data Visualization", "Statistics"],
    summary: "Turn raw e-commerce data into clear insights — build dashboards, analyze sales and ad performance, and help shape real business decisions.",
    about: "EVOC Labs unifies store infrastructure, sales and ads analytics, logistics intelligence, and growth automation into one platform. As a Data Analyst Intern, you'll work with real data from live D2C brands — cleaning it, spotting trends, and building dashboards and reports that directly inform product, marketing, and growth decisions.",
    responsibilities: [
      "Collect, clean, and organize data from multiple sources (sales, ads, logistics, customer behavior)",
      "Write SQL queries to extract, transform, and analyze data from databases",
      "Build dashboards and reports using tools like Power BI, Tableau, or Google Data Studio",
      "Analyze sales, marketing, and customer trends to surface actionable insights",
      "Track key business metrics such as revenue, CAC, ROAS, retention, and conversion rates",
      "Present findings clearly to product, marketing, and growth teams",
      "Support A/B testing and data-driven experimentation"
    ],
    requirements: [
      "Solid understanding of SQL for querying and analyzing data",
      "Working knowledge of Python (Pandas, NumPy) or strong Excel / Google Sheets skills",
      "Familiarity with data visualization tools such as Power BI or Tableau",
      "Strong analytical thinking and attention to detail",
      "Ability to translate numbers into clear, actionable insights",
      "Available for a full-time, remote commitment (3–6 months)"
    ],
    niceToHave: [
      "Experience with statistics and basic predictive modeling",
      "Exposure to e-commerce / marketing metrics (ROAS, CAC, LTV)",
      "Familiarity with Google Analytics or ad platform reporting (Meta, Google Ads)",
      "Basic scripting or spreadsheet automation skills"
    ],
    whatYouLearn: [
      "Hands-on experience analyzing real e-commerce data at scale",
      "Exposure to the metrics that drive D2C growth and decision-making",
      "Mentorship from experienced data and growth professionals",
      "Internship Completion Certificate based on performance",
      "Potential opportunity for a paid role based on performance"
    ]
  }
];

// ─────────────────────────────────────────────────────────
// CENTRAL PROFILE DATA
// Replace these values with your real information.
// Every component on the site reads from this single file.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Prathmesh Pawar",
  firstName: "Prathmesh",
  handle: "@prathmeshpawar",
  role: "Full-Stack Developer",
  tagline:
    "Building modern web applications, scalable backend systems and AI-powered experiences.",
  heroDescription:
    "I build modern, scalable web applications and AI-powered experiences using React, Java, Spring Boot and modern backend technologies.",
  aboutHeading: "Building things that solve real problems.",
  aboutDescription:
    "I'm a Computer Engineering graduate and Full-Stack Developer passionate about turning ideas into practical software products. I enjoy working across frontend, backend, databases and AI to create complete applications.",
  email: "pawarprathmesh840@gmail.com",
  github: "https://github.com/prathmesh-1570",
  linkedin: "https://linkedin.com/in/prathmesh-pawar",
  resumeUrl: "#",
  location: "India",
  availability: "OPEN TO OPPORTUNITIES",
  statusLine: ["BUILDING", "FULL-STACK + AI", "APPLICATIONS"],
  primaryTech: [
    "React",
    "JavaScript",
    "Java",
    "Spring Boot",
    "Spring Security",
    "MongoDB",
    "PostgreSQL",
    "AI APIs",
  ],
  floatingTech: ["React", "Java", "Spring Boot", "MongoDB", "AI"],
};

export const stats = [
  { value: 4, suffix: "+", label: "Major Projects" },
  { value: 6, suffix: "+", label: "Core Technologies" },
  { value: 3, suffix: "+", label: "Years Learning & Building" },
  { value: null, suffix: "∞", label: "Things To Learn" },
];

export const capabilities = [
  {
    title: "Frontend Development",
    description: "Responsive and interactive React applications.",
  },
  {
    title: "Backend Development",
    description: "REST APIs and backend systems using Java and Spring Boot.",
  },
  {
    title: "Database Systems",
    description: "MongoDB, PostgreSQL and SQL-based applications.",
  },
  {
    title: "Authentication",
    description: "JWT authentication and role-based authorization.",
  },
  {
    title: "AI Applications",
    description: "AI-powered features and API integrations.",
  },
];

export const currentlyLearning = [
  "Advanced Java",
  "Spring Boot",
  "React",
  "DSA",
  "System Design",
  "AI",
  "Cloud",
];

export const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

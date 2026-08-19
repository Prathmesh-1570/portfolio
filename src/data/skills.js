// Central skills data. Edit categories/items here — Skills.jsx just renders this.
// `icon` maps to a lucide-react icon component name (see Skills.jsx ICON_MAP).

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React.js", description: "Component-based UI development.", icon: "Atom" },
      { name: "JavaScript", description: "Modern JavaScript and application logic.", icon: "Braces" },
      { name: "HTML5", description: "Semantic and accessible markup.", icon: "Code2" },
      { name: "CSS", description: "Responsive styling and animations.", icon: "Palette" },
      { name: "Tailwind CSS", description: "Modern utility-first UI development.", icon: "Wind" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Java", description: "Object-oriented programming and backend development.", icon: "Coffee" },
      { name: "Spring Boot", description: "REST APIs and backend systems.", icon: "Leaf" },
      { name: "Spring Security", description: "Authentication and authorization.", icon: "ShieldCheck" },
      { name: "REST APIs", description: "API design and integration.", icon: "Cable" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "MongoDB", description: "NoSQL database development.", icon: "Leaf" },
      { name: "PostgreSQL", description: "Relational database systems.", icon: "Database" },
      { name: "SQL", description: "Queries, joins and database design.", icon: "Table2" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", description: "Version control.", icon: "GitBranch" },
      { name: "GitHub", description: "Code hosting and collaboration.", icon: "Github" },
      { name: "Postman", description: "API testing.", icon: "Send" },
      { name: "Maven", description: "Java dependency and build management.", icon: "Package" },
      { name: "OpenAPI", description: "API documentation.", icon: "FileJson" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      { name: "AI APIs", description: "AI-powered application integration.", icon: "Sparkles" },
      { name: "Prompt Engineering", description: "Designing effective AI interactions.", icon: "Wand2" },
    ],
  },
];

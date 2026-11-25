// Central project data. Replace with your real projects/links later —
// Projects.jsx and ProjectCard.jsx render whatever is in this array.
// `category` is used both for display and for the filter buttons.

export const projects = [
  {
    id: "grocery-delivery",
    number: "02",
    name: "Grocery Delivery Platform",
    category: "Full Stack",
    description:
      "A full-stack grocery delivery platform that enables customers to browse grocery products, manage shopping carts, and place orders through an intuitive online shopping experience.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Prathmesh-1570/grocery-delivery-fullstack",
    demo: "https://grocery-delivery-fullstack-62du.vercel.app/",
    featured: true,
  },
  {
    id: "workconnect",
    number: "02",
    name: "WorkConnect",
    category: "Full-Stack",
    description:
      "A workforce platform connecting skilled workers and employers through profiles, job posting, search and role-based dashboards.",
    technologies: ["React", "Spring Boot", "MongoDB", "JWT"],
    github: "https://github.com/Prathmesh-1570/workConnect",
    demo: "#",
    featured: false,
  },
  {
    id: "food-delivery-api",
    number: "03",
    name: "Food Delivery API",
    category: "Backend",
    description:
      "A backend system for food delivery operations including authentication, restaurants, carts, orders, payments and notifications.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "MapStruct", "OpenAPI"],
    github: "https://github.com/thynktechproject-dot/food_delivery",
    demo: "#",
    featured: false,
  },
];

export const projectFilters = ["All", "Frontend", "Backend", "Full-Stack", "AI"];

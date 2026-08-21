export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "AstraForge",
    category: "Internal Developer Platform",
    description: "A self-service infrastructure platform designed to simplify internal services and developer workflows.",
    tags: ["Rust", "Kubernetes", "Terraform"],
    image: "/project-1.png",
  },
  {
    title: "System Monitor",
    category: "Real-time System Monitoring",
    description: "A real-time monitoring application for tracking system performance and infrastructure metrics.",
    tags: ["Rust", "Axum", "React"],
    image: "/project-2.png",
  },
  {
    title: "Rainfall Analysis",
    category: "ML Rainfall Analysis",
    description: "Machine learning analysis of rainfall data using clustering and pattern analysis.",
    tags: ["Python", "Machine Learning", "Pandas"],
    image: "/project-3.png",
  },
  {
    title: "Clothing Website",
    category: "Modern E-Commerce Platform",
    description: "A responsive and clean e-commerce experience designed for a clothing brand.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project-4.png",
  },
];

export const skills = [
  { label: "Languages", values: ["Python", "Java", "Rust", "SQL"], icon: "code" },
  { label: "Development", values: ["React", "Django", "REST APIs"], icon: "monitor" },
  { label: "Cloud & Infrastructure", values: ["AWS", "Docker", "Kubernetes", "Terraform"], icon: "cloud" },
  { label: "Tools", values: ["Git", "Linux", "CI/CD"], icon: "tools" },
];

export const experience = [
  {
    date: "2025 – Present",
    title: "Associate Test Engineer",
    company: "EY GDS, Chennai",
    description: "Working on automation, testing, debugging, and supporting engineering workflows in enterprise environments.",
    icon: "briefcase",
  },
  {
    date: "Jun 2023 – Jul 2023",
    title: "Research Intern",
    company: "Indian Meteorological Department, Pune",
    description: "Worked on rainfall datasets, forecasting models, and research analysis.",
    icon: "chart",
  },
  {
    date: "2021 – 2025",
    title: "B.Tech Computer Science Engineering",
    company: "SRM Institute of Science & Technology",
    description: "Built a strong foundation in computer science, software engineering, and problem solving.",
    icon: "graduation",
  },
];
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const resumeUrl = "/Kundan_Ayare_Resume.pdf?v=54634b4";

export const projects = [
  {
    title: "AstraForge",
    category: "Internal Developer Platform",
    description: "A self-service platform for scaffolding and deploying microservices with Rust, GitOps, and cloud-native infrastructure.",
    tags: ["Rust", "Kubernetes", "Argo CD", "Terraform"],
    image: "/project-1.png",
  },
  {
    title: "Real-Time System Monitor",
    category: "Real-time System Monitoring",
    description: "A Rust dashboard and REST API for live CPU, memory, disk, network, uptime, and system metrics.",
    tags: ["Rust", "Axum", "Tokio", "Docker"],
    image: "/project-2.png",
  },
  {
    title: "Rainfall Clustering Analysis",
    category: "ML Rainfall Analysis",
    description: "Applied unsupervised learning to NetCDF rainfall data to identify trends and improve forecasting analysis.",
    tags: ["Python", "Scikit-learn", "Pandas", "NetCDF"],
    image: "/project-3.png",
  },
];

export const skills = [
  { label: "DevOps & Cloud", values: ["Kubernetes", "Docker", "Terraform", "Argo CD", "GitOps", "GitHub Actions", "CI/CD", "Prometheus", "Grafana", "Loki"], icon: "cloud" },
  { label: "Data & ML", values: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "NetCDF"], icon: "chart" },
  { label: "Languages", values: ["Python", "Rust", "Java", "SQL"], icon: "code" },
  { label: "Frameworks & Tools", values: ["Axum", "Tokio", "REST APIs", "Git", "Linux", "Cosign", "Trivy"], icon: "tools" },
  { label: "Testing & QA", values: ["Selenium WebDriver", "Test Automation", "Defect Analysis", "System Testing", "Agile/Scrum"], icon: "monitor" },
];

export const experience = [
  {
    date: "Mar 2025 – Present",
    title: "Associate Test Engineer",
    company: "EY GDS, Chennai",
    description: "Developed Java and Selenium WebDriver automation, performed end-to-end validation and defect analysis, and supported enterprise delivery in Agile environments.",
    icon: "briefcase",
  },
  {
    date: "Jun 2023 – Jul 2023",
    title: "Research Intern",
    company: "Indian Meteorological Department, Pune",
    description: "Analyzed atmospheric data and collaborated with senior researchers to improve rainfall forecasting algorithms, reducing data misinterpretation by over 20%.",
    icon: "chart",
  },
  {
    date: "Sep 2021 – Jun 2025",
    title: "Bachelor of Technology in Computer Science",
    company: "SRM Institute of Science & Technology, Chennai",
    description: "Built a strong foundation in computer science, software engineering, and problem solving.",
    icon: "graduation",
  },
  {
    date: "Leadership Experience",
    title: "Committee Head, External Affairs",
    company: "Aaruush, National Level Techno-Management Fest",
    description: "Coordinated logistics and cross-functional teams across multiple events, ensuring smooth execution of the fest.",
    icon: "briefcase",
  },
];
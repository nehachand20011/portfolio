export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technical Skills", href: "#technical-skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Neha Chand",
  initials: "NC",
  role: "Software Engineer",
  title: "Software Engineer · .NET & Angular Developer",
  heroIntroduction:
    "I build secure, scalable web applications for fintech and enterprise environments.",
  about:
    "I'm a dedicated Software Engineer with expertise in .NET Core, Angular, and modern web technologies. I enjoy solving complex problems, learning new skills, and contributing to meaningful projects.",
  profileImage: "/projects/profile.png", 
  workspaceImage: "/projects/workspace.png", 
  cvUrl: "/Neha_Chand_CV.pdf",
  email: "nehachand20011@gmail.com",
  phone: "+977 9869913637", 
  location: "Kathmandu, Nepal",
  github: "https://github.com/nehachand20011",
  linkedin: "https://www.linkedin.com/in/neha-chand",
  twitter: "https://x.com/NehaGyanoo",
};

const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const techStack = [
  { name: "Angular", logo: `${devicon}/angular/angular-original.svg` },
  { name: ".NET Core", logo: `${devicon}/dotnetcore/dotnetcore-original.svg` },
  { name: "C#", logo: `${devicon}/csharp/csharp-original.svg` },
  { name: "TypeScript", logo: `${devicon}/typescript/typescript-original.svg` },
  { name: "PostgreSQL", logo: `${devicon}/postgresql/postgresql-original.svg` },
  {
    name: "SQL Server",
    logo: `${devicon}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
  },
  { name: "Git", logo: `${devicon}/git/git-original.svg` },
  { name: "Docker", logo: `${devicon}/docker/docker-original.svg` },
];

export const experience = [
  {
    role: "Software Engineer",
    description:
      "Developing and maintaining scalable web applications using .NET and Angular.",
  },
  {
    role: "Junior Software Developer",
    description: "Worked on web applications using .NET and Angular.",
  },
];

export const skillCards = [
  { icon: "frontend", title: "Frontend", items: ["Angular", "TypeScript", "JavaScript"] },
  { icon: "backend", title: "Backend", items: ["C#", "ASP.NET Core", ".NET", "REST APIs"] },
  { icon: "database", title: "Database", items: ["PostgreSQL", "SQL Server"] },
  {
    icon: "tools",
    title: "Tools & Practices",
    items: ["Git", "Docker", "Clean Architecture", "CQRS"],
  },
] as const;

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  tags: string[];
  users: string;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Fewa Card Portal",
    description: "Credit and debit card management and issuance workflows.",
    image: "/projects/ccms.png",
    features: [
      "Credit and debit card issuance and management",
      "Customer information and card application management",
      "Card activation, blocking, and status management",
      "Card request approval and rejection workflows",
      "Card stock and inventory management",
      "Card product and fee plan configuration",
      "Card renewal, replacement, and reissuance management",
      "Integration with Core Banking System (CBS)",
      "Role-based access control and approval workflows",
      "Card request tracking and reporting",
    ],
    tags: ["Angular", ".NET", "PostgreSQL"],
    users: "Bank Customers",
  },
  {
    id: 2,
    title: "Fewa Merchant Portal",
    description: "Merchant onboarding and transaction management.",
    image: "/projects/merchant-portal.png",
    features: [
      "Dashboard for balance, settlements & transactions",
      "Advanced filters and search for transaction tracking",
      "Real-time financial updates",
      "Detailed payment & settlement reports",
      "Integrations with Visa, Mastercard, Fonepay & Nepalpay",
    ],
    tags: ["Angular", ".NET", "SQL Server"],
    users: "1K+ Merchants",
  },
  {
    id: 3,
    title: "FewaTMS",
    description: "Terminal and inventory management.",
    image: "/projects/tms.png",
    features: [
      "Merchant onboarding and management",
      "Terminal registration, assignment, and lifecycle management",
      "Terminal inventory and stock management",
      "Role-based access control and authorization",
      "Multi-tenant architecture and tenant management",
      "Terminal monitoring and status tracking",
      "System-wide refactoring and performance optimization",
      "Reporting and support operation management",
    ],
    tags: [".NET 10", "IMARK", "NEPS"],
    users: "Banking & Cooperative Sector",
  },
  {
    id: 4,
    title: "IPOS & Bank Portal",
    description:
      "POS device lifecycle management system with bank-side integration via IMARK for secure POS operations.",
    image: "/projects/ipos.png",
    features: [
      "POS device deployment & configuration management",
      "Reconfiguration, support, and maintenance tracking",
      "IMARK integration for bank-side POS actions",
      "Code refactor and database query optimization",
    ],
    tags: ["React", "Next.js", "Prisma", "MySQL"],
    users: "Enterprise Banking Use",
  },
  {
    id: 5,
    title: "Fewa MMS",
    description:
      "Merchant payment system supporting real-time QR-based payments and merchant onboarding.",
    image: "/projects/mms.png",
    features: [
      "Real-time QR payment processing",
      "Merchant onboarding with auto-generated QR codes",
      "QR generation, scanning & validation APIs",
      "Secure transaction processing",
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
    users: "Merchants & Payment Partners",
  },
];
export const education = [
  { title: "M.Sc. CSIT", institution: "Tribhuvan University" },
];
export const skills = [
  "Figma", "Adobe Illustrator", "Adobe Photoshop",
  "C/C++ & Java", "Python", "HTML & CSS",
  "TypeScript", "JavaScript", "PHP",
  "SQL", "Node.js", "Next.js",
];

export const projects = [
  {
    id: "01", type: "Freelance · Front-end Developer",
    title: "Eventra — Web Ticketing & Event Management",
    desc: "Analyzed client case studies and translated complex requirements into a campus event management platform. Full front-end ownership covering session registration, participant verification, and QR scanning flows.",
    tools: ["Figma", "UI/UX Design", "Client Analysis", "Front-end Dev"],
    link: null, linkLabel: "Coming Soon",
    images: ["/photos/eventra.jpg"], reverse: false,
  },
  {
    id: "02", type: "Academic · IoT Concept",
    title: "Moisture Mobile App",
    desc: "Led UI/UX design for a mobile app that visualizes real-time soil moisture from IoT sensors. Complex sensor data made readable for farmers — with crop recommendations and actionable alerts.",
    tools: ["Figma", "IoT Concept", "User-Centered Design"],
    link: "https://www.figma.com/design/sWEbPLwDxadNRxADA9wKw1/Moisture-Mobile-App",
    linkLabel: "View on Figma", images: ["/photos/Frame 1.png"], reverse: true,
  },
  {
    id: "03", type: "Academic · UI Animation",
    title: "Skincare E-commerce Web Design",
    desc: "Designed a clean e-commerce prototype for a skincare brand. Deep focus on interactive carousels, reusable Figma components, and micro-interactions that guide the user's eye without friction.",
    tools: ["Figma", "UI Animation", "Prototyping", "Component Design"],
    link: "https://www.figma.com/design/4l2hV80Q5t9SZttrBIeIjN/Tugas-Rancang-UI---CEIN--Angelica--Zaidaan--Abiezer-",
    linkLabel: "View on Figma", images: ["/photos/Frame 18.png"], reverse: false,
  },
  {
    id: "04", type: "Academic · Core Fundamentals",
    title: "CRUD System Fundamentals",
    desc: "Terminal-based CRUD systems (Bank, Library, Restaurant) in C and Java. Foundational work in data structures, algorithmic logic, and memory management — the bedrock of stable software.",
    tools: ["C/C++", "Java", "Algorithm Design", "Data Structures"],
    link: "https://github.com/ChaserHades/CRUDSystem",
    linkLabel: "View on GitHub", images: [], reverse: true,
  },
  {
    id: "05", type: "Academic · Creative Exploration",
    title: "Pixel Game UI Prototype",
    desc: "Game UI concept blending Growtopia and Terraria aesthetics. An exercise in pixel-art design systems — conveying game state (health, inventory, world) without cluttering the play experience.",
    tools: ["Figma", "Game UI", "Pixel Art"],
    link: "https://www.figma.com/design/HCBBtdQb94UI42kpIc5WdS/Gamaliel_672023096_Tugas1",
    linkLabel: "View on Figma", images: ["/photos/Frame 2.png"], reverse: false,
  },
];

export const certs = [
  "Oracle Software Engineering Certificate",
  "Security of Cyber Analyst – Level 1",
];

export const socialLinks = [
  { href: "https://github.com/ChaserHades",          label: "GitHub"    },
  { href: "https://linkedin.com/in/gamalielabiezer",  label: "LinkedIn"  },
  { href: "https://instagram.com/gamalielabiezer",    label: "Instagram" },
];

export const CRUD_CODE = `// CRUD System — Banking Module
struct Account {
  int    id;
  char   name[50];
  double balance;
};

void deposit(Account* a, double amt) {
  a->balance += amt;
  printf("Deposited: %.2f\\n", amt);
}

void withdraw(Account* a, double amt) {
  if (amt > a->balance) return;
  a->balance -= amt;
}`;

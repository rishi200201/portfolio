
export const projects = [
  {
    title: "NVZ Website",
    description: "Responsive freelance site built with React + Vite and a hybrid Material UI + Tailwind design system. Fast, polished, and client-focused.",
    technologies: ["React", "Vite", "Material UI", "TailwindCSS", "Responsive"],
    gradient: "from-indigo-500 to-blue-500",
    icon: "🚀",
    url: "https://nivuzzdesign.github.io/NVZ/"
  },
  {
    title: "Fine Click Photography",
    description: "Minimal, elegant photography showcase with performance optimizations and a distraction‑free viewing experience.",
    technologies: ["React", "Vite", "Material UI", "TailwindCSS", "Performance"],
    gradient: "from-pink-500 to-rose-500",
    icon: "📸",
    url: "https://fineclickphotography.github.io/fine_click/"
  },
  {
    title: "ERP Portal",
    description: "Comprehensive enterprise resource planning system with multi-module integration, real-time analytics, and role-based workflow management for streamlined business operations.",
    technologies: ["React", "Node.js", "MongoDB", "OAuth", "REST APIs"],
    gradient: "from-blue-500 to-cyan-400",
    icon: "📊"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with secure payments, inventory controls, and adaptive layout for all devices.",
    technologies: ["React", "Express.js", "MongoDB", "Stripe"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🛒"
  }
];

export function getProjectSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

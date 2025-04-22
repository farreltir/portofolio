export const SITE_CONFIG = {
  name: "Eduardus Farrel Tirtawinata",
  title: "Frontend Developer & UI Enthusiast",
  description:
    "Crafting elegant, responsive web interfaces with a focus on user experience and performance.",
  url: "farreltir@gmail.com",
  ogImage: "https://www.instagram.com/farreltirtawinata/#",
  links: {
    github: "https://github.com/farreltir",
    linkedin: "https://www.linkedin.com/in/farrelt/",
    instagram: "https://www.instagram.com/farreltirtawinata/#",
    spotify:
      "https://open.spotify.com/user/sjk00ccd6eurjlo67opgjyiwj?si=BXxhh8OXT6WPU27HrVHrIQ&nd=1&dlsi=e70a80d3d24c442f",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "About Me", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Dimsum Andria",
    description:
      "A beautiful and responsive restaurant website, built with dynamic content and smooth animations.",
    image: "images/dimsum.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://dimsum-andria.vercel.app/",
  },
  {
    id: 2,
    title: "Klaska Residence",
    description:
      "A modern and stylish landing page for an exclusive residential property, designed with immersive visuals and user-friendly navigation.",
    image: "images/klaska.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://www.klaskaresidence.com/",
  },
  {
    id: 3,
    title: "Grand Wisata Bekasi",
    description:
      "A vibrant and informative website for Grand Wisata Bekasi, featuring interactive layouts and dynamic content to showcase residential, commercial, and lifestyle offerings.",
    image: "images/grand.png",
    tags: ["React", "Next.js", "Tailwind CSS", "SEO"],
    link: "https://grandwisatabekasi.com/id/",
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Design",
    items: [
      "UI/UX Principles",
      "Responsive Design",
      "Figma",
      "Adobe XD",
      "Design Systems",
    ],
  },
  {
    category: "Tools & DevOps",
    items: ["Git & GitHub", "Vercel", "Netlify", "VS Code", "Postman"],
  },
  {
    category: "Others",
    items: ["Agile/Scrum", "Notion", "Jira", "Markdown", "Basic SEO"],
  },
];

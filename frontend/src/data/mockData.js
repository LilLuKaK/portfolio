// Mock data for Lucas Bravo Parra's portfolio
export const personalInfo = {
  name: "LUCAS",
  surname: "BRAVO",
  title: "FRONT-END DEVELOPER",
  location: "Madrid, Spain",
  email: "bravoparralucas@gmail.com",
  profile: "Front-End Developer with experience in React and TypeScript, currently building digital solutions from scratch for the financial sector. I've worked on national-scale campaigns and products, and collaborated in established environments using Angular and Vue.",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced, B2 Certified" }
  ],
  license: "Driver's license & car"
};

export const skills = {
  frontend: ["HTML5", "JavaScript", "TypeScript", "React", "Vue.js", "Angular"],
  backend: ["API Rest", "PHP", "Java", "C", "C#"],
  databases: ["MySQL", "SQL Server"],
  methodologies: ["Scrum", "Kanban"],
  os: ["Windows (11, 10, Server)", "Linux (Arch, Ubuntu, Ubuntu Server)", "Raspbian"],
  tools: ["VS Code", "Visual Studio", "Git", "GitHub", "Figma"]
};

export const experience = [
  {
    id: 1,
    position: "Front-End Developer",
    company: "Banco Cooperativo Español",
    location: "Madrid, Spain",
    period: "Jun 2024 – Present",
    description: [
      "Developed complete digital marketing projects from scratch for major rural banks, including landing pages, microsites, emails, and interactive tools.",
      "Heavy use of React + TypeScript with modular and reusable design, prioritizing accessibility, performance, and long-term maintenance.",
      "Actively supported external projects and collaborated with core teams on architectures using Angular and Vue.js, applying best practices to maintain code consistency and solve issues quickly.",
      "Coordinated with design teams using agile methodologies (Scrum/Kanban), promoting autonomy, initiative, and clear communication."
    ]
  },
  {
    id: 2,
    position: "Front-End Developer",
    company: "Fiscales Alternative S.L.",
    location: "Madrid, Spain",
    period: "Mar 2024 – Jun 2024",
    description: [
      "Contributed to the development of tools for content automation and analysis for digital media and brands, building reactive and optimized UIs.",
      "Built reusable components and visual dashboards using React and TypeScript, connected to back-end systems via REST APIs.",
      "Managed application state and async data flows for real-time data visualization.",
      "Worked in a collaborative Scrum and Kanban environment, directly with UX, product, and back-end to deliver functional iterations each sprint."
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Web Application Development",
    institution: "C.F.P. Juan XXIII",
    location: "Madrid, Spain",
    period: "2022 – 2024",
    description: [
      "Developed complete applications using PHP, Java, and C, applying structured programming principles.",
      "Built functional and accessible interfaces with HTML, CSS, JavaScript focused on user experience.",
      "Participated in an end-of-degree project (TFG), taking a key role in the web development area.",
      "Applied Scrum and agile methodologies, assuming different roles in various stages of development."
    ]
  }
];

export const projects = [
  /*{
    id: 1,
    title: "Can't look at this LOL",
    description: "Can't look at this LOL but longer.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTI3NDcyNjh8MA&ixlib=rb-4.1.0&q=85",
    featured: true,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Can't look at this LOL",
    description: "Can't look at this LOL but longer.",
    technologies: ["React", "TypeScript", "Chart.js", "REST API"],
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTI3NDcyNjh8MA&ixlib=rb-4.1.0&q=85",
    featured: true,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Can't look at this LOL",
    description: "Can't look at this LOL but longer.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTI3NDcyNjh8MA&ixlib=rb-4.1.0&q=85",
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 4,
    title: "Can't look at this LOL",
    description: "Can't look at this LOL but longer.",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTI3NDcyNjh8MA&ixlib=rb-4.1.0&q=85",
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 5,
    title: "Can't look at this LOL",
    description: "Can't look at this LOL but longer.",
    technologies: ["Angular", "TypeScript", "Java", "MySQL"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTI3NDcyNjh8MA&ixlib=rb-4.1.0&q=85",
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  }*/
];
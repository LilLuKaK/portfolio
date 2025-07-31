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

export const songs = [
  {
    title: 'SOMEBODY LOVES ME',
    artist: 'PARTYNEXTDOOR, Drake',
    albumArt: 'https://ia600809.us.archive.org/11/items/sss4u/Cover.jpg?cnt=0',
    audioUrl: 'https://ia800809.us.archive.org/11/items/sss4u/07%20-%20SOMEBODY%20LOVES%20ME.mp3',
    color: '#4c4235'
  },
  {
    title: 'No Pole',
    artist: 'Don Toliver',
    albumArt: 'https://ia801609.us.archive.org/22/items/don-toliver-love-sick-deluxe/Deluxe/cover.jpg?cnt=0',
    audioUrl: 'https://ia801609.us.archive.org/22/items/don-toliver-love-sick-deluxe/Deluxe/01-No%20Pole.mp3',
    color: '#7113b5'
  },
  {
    title: 'Fountains',
    artist: 'Drake, Tems',
    albumArt: 'https://ia601608.us.archive.org/28/items/drake-certified-lover-boy_202303/Certified%20Lover%20Boy.jpg?cnt=0',
    audioUrl: 'https://dn721902.ca.archive.org/0/items/drake-certified-lover-boy_202303/Drake%20-%20Fountains%20%28with%20Tems%29.mp3',
    color: '#d8e0ae'
  },
  {
    title: 'Favorite Lie',
    artist: 'Lil Tecca',
    albumArt: 'https://ia800707.us.archive.org/3/items/lil-tecca-dopamine/artworks-35OOXOGA9SjkcKZr-7l4KRw-t500x500.jpg?cnt=0',
    audioUrl: 'https://dn721905.ca.archive.org/0/items/lil-tecca-dopamine/05%20Favorite%20Lie.mp3',
    color: '#040404'
  },
  {
    title: 'NOKIA',
    artist: 'Drake',
    albumArt: 'https://ia600809.us.archive.org/11/items/sss4u/Cover.jpg?cnt=0',
    audioUrl: 'https://ia904506.us.archive.org/6/items/partynextdoor-drake-some-sexy-songs-4-u/PARTYNEXTDOOR%20%26%20Drake%20%24%24%244U%2014%20NOKIA.mp3',
    color: '#4c4235'
  },
  {
    title: 'Always Be My Fault',
    artist: 'Future, Metro Boomin, The Weeknd',
    albumArt: 'https://ia600305.us.archive.org/12/items/future-metro-boomin-we-still-dont-trust-you/WE%20STILL%20DON%27T%20TRUST%20YOU%20%282024%29/WE%20STILL%20DON%27T%20TRUST%20YOU%20%28Cover%29.jpg?cnt=0',
    audioUrl: 'https://dn721907.ca.archive.org/0/items/future-metro-boomin-we-still-dont-trust-you/WE%20STILL%20DON%27T%20TRUST%20YOU%20%282024%29/Future%20%26%20Metro%20Boomin%20WSDTY%2016%20Always%20Be%20My%20Fault.mp3',
    color: '#bebebe'
  },
  {
    title: 'Sky Might Fall',
    artist: 'Kid Cudi',
    albumArt: 'https://ia801400.us.archive.org/16/items/man-on-the-moon-kid-cudi/ManonTheMoonTheEndofDay.jpg?cnt=0',
    audioUrl: 'https://dn720301.ca.archive.org/0/items/man-on-the-moon-kid-cudi/Sky%20Might%20Fall.mp3',
    color: '#cc5b80'
  },
  {
    title: 'Marijuana',
    artist: 'Kid Cudi',
    albumArt: 'https://ia601206.us.archive.org/0/items/man-on-the-moon-2/Kid%20Cudi%20-%20Man%20On%20The%20Moon%20II%20The%20Legend%20Of%20Mr.%20Rager%20%282010%29%20%5B16B-44.1kHz%5D/cover.jpg?cnt=0',
    audioUrl: 'https://ia801206.us.archive.org/0/items/man-on-the-moon-2/Kid%20Cudi%20-%20Man%20On%20The%20Moon%20II%20The%20Legend%20Of%20Mr.%20Rager%20%282010%29%20%5B16B-44.1kHz%5D/05.%20Marijuana.mp3',
    color: '#4d392b'
  },
  {
    title: 'The Color Violet',
    artist: 'Tory Lanez',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2730c5f23cbf0b1ab7e37d0dc67',
    audioUrl: 'https://dn720302.ca.archive.org/0/items/the-color-violet/The%20Color%20Violet.mp3',
    color: '#632e13'
  },
  {
    title: 'Dark Thoughts',
    artist: 'Lil Tecca',
    albumArt: 'https://ia800707.us.archive.org/3/items/lil-tecca-dopamine/artworks-35OOXOGA9SjkcKZr-7l4KRw-t500x500.jpg?cnt=0',
    audioUrl: 'https://dn721905.ca.archive.org/0/items/lil-tecca-dopamine/01%20Dark%20Thoughts.mp3',
    color: '#040404'
  },
];
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  seeketing,
  popular,
  vinicola,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Seeketing",
    icon: seeketing,
    iconBg: "#383E56",
    date: "March 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Popular Bank",
    icon: popular,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and optimized T-SQL queries to improve database performance and reduce response times for internal applications.",
      "Created and maintained APIs using Node.js to integrate internal services and facilitate efficient system communication.",
      "Automated processes with stored procedures to streamline repetitive tasks and enhance backend efficiency.",
      "Collaborated with team members to design and implement new features for internal applications and improve user experience.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Vinicola Del Norte",
    icon: vinicola,
    iconBg: "#383E56",
    date: "Abril 2024 - Jan 2025",
    points: [
      "Developed and maintained backend services using Node.js and T-SQL to optimize database performance.",
      "Designed and implemented APIs to facilitate seamless communication between internal systems.",
      "Optimized stored procedures and queries to improve data retrieval efficiency.",
      "Integrated authentication and security measures to ensure data integrity and user access control.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Brian is a skilled developer who always delivers high-quality solutions. His problem-solving mindset is invaluable.",
    name: "Rafiel Taveras",
    designation: "Dev",
    company: "Anncar LLC",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEMIZv0b9RFBQ/profile-displayphoto-shrink_800_800/B4DZT3WBeLGkAg-/0/1739316533480?e=1746662400&v=beta&t=FdpXB3argcPE7l3aGAn9UP0_ldREwB6Wiyk1xRjPkGA",
  },
  {
    testimonial:
      "Great to work with! Brian is efficient, detail-oriented, and always finds the best approach to any challenge.",
    name: "José Román",
    designation: "Engineer",
    company: "Newtech S.R.L",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQE1qOdjOSRNuQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1715566089241?e=1741716000&v=beta&t=UWuD9R50s8lmnoa3-bk3CHmt9lHP9OndPwBe5AHq-F8",
  },
  {
    testimonial:
      "Brian’s expertise in backend and databases is top-notch. He’s a reliable and talented developer.",
    name: "Melvin Núñez",
    designation: "Mechatronic",
    company: "Cardinal Health",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEoITZVx-I8kQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718332086102?e=1746662400&v=beta&t=7yjvhxOt0HFC2psWGWCLrQ4iRRZiCi4g3lHzKEUYr5Y",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

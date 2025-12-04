export const projects = [
  {
    id: "wordpress",
    title: "WordPress Custom Plugin System",
    image: "/projects/Wordpress.png",
    description:
      "Fully custom WordPress plugin with REST APIs, database integration and admin dashboard.",
    tech: ["PHP", "MySQL", "WordPress Plugins", "Tailwind", "REST API"],
    live: "http://www.test.sreenipillamarri.com.au",
    github: "https://github.com/Noobod/Wordpress-Custom-Plugin",
    details: `
      Custom-built plugin to automate backend workflows and store structured data inside WordPress.

      ✦ Features:
      - Full plugin lifecycle: activation, uninstall cleanup, schema migration
      - Custom DB model with MySQL persistence
      - Admin dashboard UI built using Tailwind CSS

      ✦ Purpose:
      Built during internship to automate repeated internal tasks.
    `,
  },

  {
    id: "xflyve",
    title: "XFlyve Logistics Automation Platform",
    image: "/projects/xflyve.png",
    description:
      "A SaaS platform that automates logistics operations, replacing spreadsheet workflows and improving operational efficiency by 70%.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "GitHub Actions"],
    live: "https://xflyve.vercel.app/",
    github: "https://github.com/Noobod/XFlyve",
    details: `
      XFlyve automates logistics tasks such as driver scheduling, delivery tracking and internal communication.

      ✦ Key Features:
      - Admin dashboard with automated reporting
      - Realtime driver & delivery tracking
      - Authentication + role-based permissions
      - Docker-based deployment and CI/CD with GitHub Actions

      ✦ Impact:
      Reduced operational manual workload by over 70%.
    `,
  },

  {
    id: "wanderlust",
    title: "Wanderlust Booking Platform",
    image: "/projects/Wanderlust.png",
    description:
      "Airbnb-style booking system with search, filters, authentication, image uploads and admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "EJS"],
    live: "https://wanderlust-mern.onrender.com/",
    github: "https://github.com/Noobod/Wanderlust-Booking",
    details: `
      A full booking platform inspired by Airbnb.

      ✦ Features:
      - Login / Signup with JWT
      - Booking system with filters and search
      - Cloudinary-based image upload system
      - Admin moderation and review system

      ✦ Outcome:
      Built as a full MERN hands-on scalable learning project.
    `,
  },
];

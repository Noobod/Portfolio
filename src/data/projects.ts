export const projects = [
  {
    id: "xflyve",
    title: "XFlyve Logistics Automation Platform",
    image: "/projects/xflyve.png",
    description:
      "An internal web application built to replace spreadsheet-based logistics workflows and reduce manual operational effort by ~70%.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "GitHub Actions",
    ],
    live: "https://xflyve.vercel.app/",
    github: "https://github.com/Noobod/XFlyve",
    details: `
XFlyve is an internal logistics automation tool I designed and built while working in operations to streamline daily coordination tasks.

✦ Key Features:
- Public landing page for company access
- Secure admin login to create and assign jobs
- Driver login to view assigned tasks
- Role-based authentication and authorization
- File uploads for operational documents
- Dockerized setup with CI/CD using GitHub Actions (working knowledge)

✦ Impact:
Reduced daily manual operational work by ~70% by replacing Excel-based coordination.
  `,
  },

  {
    id: "wordpress",
    title: "Community Voice — WordPress Plugin",
    image: "/projects/Wordpress.png",
    description:
      "A custom WordPress plugin built during my internship to capture community concerns (anonymous option), track requests in admin, and notify users via email.",
    tech: ["PHP", "WordPress Plugin APIs", "MySQL", "AI Chatbot Integration"],
    live: "https://sreenipillamarri.com.au/",
    details: `
Community Voice is a WordPress plugin I proposed and built to replace email-based submissions with a structured workflow inside WordPress.

✦ Key Features:
- Front-end form with optional anonymous submission
- File upload support and reference ID generation per submission
- Admin workflow with request status tracking (Pending / In Progress / Resolved / Closed)
- Email notifications to admin and user (when not anonymous)
- Integrated and configured an AI chatbot (FastBots) to support public-facing queries

✦ Purpose:
Built during my internship to create a reliable, trackable process for community requests.
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

  {
    id: "tradetrack",
    title: "TradeTrack — Trading Dashboard Simulation",
    image: "/projects/TradeTrack.png",
    description:
      "A responsive trading dashboard simulation built to practice dashboard-heavy UI, authentication, and data visualisation using the MERN stack.",
    tech: [
      "React",
      "Bootstrap",
      "Material UI",
      "Chart.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "https://trade-track-front.vercel.app",
    github: "https://github.com/Noobod/TradeTrack",
    details: `
TradeTrack is a simulated trading dashboard inspired by modern stock trading platforms.
The project focuses on building a realistic dashboard experience using simulated data.

✦ Key Features:
- Authentication with simulated user accounts
- Dashboard views for holdings, positions, and orders
- Interactive charts using Chart.js
- Simulated order placement and historical data
- Fully responsive UI for desktop and mobile

✦ Architecture:
- React-based landing and dashboard interfaces
- Express API with MongoDB data models
- Clear separation between frontend and backend

✦ Purpose:
Built as a learning-focused project to understand dashboard design, authentication flows, and data visualisation in a MERN application.
  `,
  },

  {
    id: "meetify",
    title: "Meetify — Real-Time Video Meeting Platform",
    image: "/projects/Meetify.png",
    description:
      "A real-time video meeting platform built to understand WebRTC, real-time signaling, and multi-user communication using a full MERN backend.",
    tech: [
      "React",
      "Vite",
      "CSS Modules",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
    ],
    live: "https://meetify-frontend.onrender.com",
    github: "https://github.com/Noobod/Meetify",
    details: `
Meetify is a full-stack real-time video meeting application built to explore peer-to-peer communication and real-time systems.

✦ Key Features:
- User authentication (register / login)
- Create and join video meetings
- Real-time audio and video streaming using WebRTC
- Socket.IO-based signaling for peer connection setup
- Responsive UI across devices
- Meeting history stored in the database

✦ Architecture:
- React frontend built with Vite
- Express backend with MongoDB for persistence
- WebRTC for peer-to-peer media streaming
- Socket.IO for signaling and room coordination

✦ Purpose:
Built as a learning-focused project to understand real-time communication, signaling, and multi-user application flows in a full-stack environment.
  `,
  },
];

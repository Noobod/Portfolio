export const projects = [
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

  {
    id: "wordpress",
    title: "WordPress Custom Plugin System",
    image: "/projects/Wordpress.png",
    description:
      "Fully custom WordPress plugin with REST APIs, database integration and admin dashboard.",
    tech: ["PHP", "WordPress Plugins"],
    live : "https://sreenipillamarri.com.au/",
    details: `
      Custom-built plugin to automate backend workflows and store structured data inside WordPress.

      ✦ Features:
      - Full plugin lifecycle: activation, uninstall cleanup, schema migration
      - Custom DB model with MySQL persistence

      ✦ Purpose:
      Built during internship to automate repeated internal tasks.
    `,
  },

  {
  id: "tradetrack",
  title: "TradeTrack – Zerodha Clone Trading Dashboard",
  image: "/projects/TradeTrack.png",
  description:
    "A fully responsive clone of Zerodha’s trading dashboard with simulated trading data, authentication, charts, and a clean professional UI.",
  tech: ["React", "Bootstrap", "MUI", "Chart.js", "Node.js", "Express", "MongoDB"],
  live: "https://trade-track-front.vercel.app",
  github: "https://github.com/Noobod/TradeTrack",
  details: `
    TradeTrack is a Zerodha-style trading interface built with a complete MERN setup.
    It simulates a real-world trading workflow including holdings, positions, orders, and charts.

    ✦ Features:
    - Clone of Zerodha trading interface
    - Fully responsive: mobile + desktop
    - Holdings, Positions, Orders dashboards
    - Chart.js-powered analytics
    - Signup/Login (Passport.js local strategy)
    - New order placement (simulated)
    - Historical positions & holdings
    - MongoDB Atlas backend integration

    ✦ Tech:
    React, Bootstrap UI, MUI components, Chart.js charts, Node.js, Express.js, MongoDB Atlas

    ✦ Structure:
    - frontend (React landing page)
    - dashboard (React trading dashboard)
    - backend (Express + MongoDB API)

    ✦ Demo Credentials:
    Email: demo@TradeTrack.com  
    Password: demo123

    ✦ Deployment:
    Frontend deployed on Vercel.
  `,
},

{
  id: "meetify",
  title: "Meetify – Real-Time Video Meeting App",
  image: "/projects/Meetify.png",
  description:
    "A real-time video meeting platform using WebRTC, Socket.IO, and a full MERN backend. Users can host or join meetings with live audio/video.",
  tech: [
    "React",
    "Vite",
    "CSS Modules",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "WebRTC"
  ],
  live: "https://meetify-frontend.onrender.com",
  github: "https://github.com/Noobod/Meetify",
  details: `
    Meetify is a full-stack real-time video conferencing platform built from scratch using WebRTC and Socket.IO.
    It supports multi-user video calls, meeting creation, authentication, and meeting history tracking.

    ✦ Features:
    - User authentication (Register / Login)
    - Create or join video meetings
    - Real-time video & audio streaming using WebRTC
    - Socket.IO signaling for peer connections
    - Responsive UI for all devices
    - Track meeting history
    - Separate frontend + backend deployment on Render

    ✦ Tech:
    Frontend: React (Vite), CSS Modules  
    Backend: Node.js, Express, MongoDB (Mongoose)  
    Real-Time: WebRTC + Socket.IO  
    Other: Axios, bcrypt, dotenv, CORS

    ✦ How WebRTC Works:
    - Peer-to-peer audio/video streaming  
    - Very low latency  
    - Browser-native, no plugins required  
    - Socket.IO handles signaling & connection setup

    ✦ Deployment:
    Frontend: Render  
    Backend: Render  
  `,
},

];

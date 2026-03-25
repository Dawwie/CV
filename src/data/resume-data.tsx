import { CvPicture } from "@/images";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dawid Wietrzych",
  initials: "DW",
  location: "Poznań, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Poznań",
  about:
    "React Native & Fullstack Developer which is passionate about mobile development",
  summary:
    "Hi there! I'm Dawid, a React Native & Fullstack Developer. I'm passionate about mobile development and I love to learn new things. I'm currently working at Pstryk as a Senior React Native Developer. I spend my free time at the gym, padel matches, electronic music festivals and live comedy stand-ups.",
  avatarUrl: require("../images/cv-picture.jpeg"),
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "dawid.wietrzych@gmail.com",
    tel: "+48 728 222 223",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Dawwie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dawid-wietrzych/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Adam's Mickiewicz University",
      degree: "Master's Degree in Computer Science (Specialization: AI)",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Pstryk",
      link: "https://www.pstryk.pl/",
      badges: ["Remote"],
      title: "Senior React Native Developer",
      start: "2024",
      end: "present",
      description:
        "Senior React Native Developer with Expo, also maintaining a web application and SPA built in Next.js. Working on an application offering innovative energy solutions for the Polish market — dynamic pricing, real-time electricity consumption and cost monitoring, and intelligent energy management.",
    },
    {
      company: "STX Next",
      link: "https://www.stxnext.com/",
      badges: ["Remote"],
      title: "Senior React Native Developer | Python Developer",
      start: "2022",
      end: "2024",
      description:
        "Initially as a Python Developer who was given the opportunity to move into React Native. Development of projects for clients in various sectors like Sports, Medical, Retail, Beauty. Participation in the development of greenfield projects as well as ongoing application development, both in larger teams and individually. Actively contributing to departmental growth through preparing technological presentations and promoting React Native knowledge.",
    },
    {
      company: "Talex S.A.",
      link: "https://www.talex.pl/",
      badges: ["Onsite", "Remote"],
      title: "Software Developer",
      start: "2019",
      end: "2022",
      description:
        "Full-stack development - Python (Django REST) and JavaScript (Vue.js, Nuxt.js, Expo). Development of projects from scratch to implementation and maintenance of functionality. Projects from the sectors of Finance, E-commerce, Logistics.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/React Native",
    "Expo",
    "EAS (Expo Application Services)",
    "Reanimated",
    "Lottie",
    "Zustand",
    "Native Modules",
    "PostHog",
    "Bitrise",
    "App Store Connect",
    "Google Play Console",
    "Firebase",
    "Python",
    "Django/Fast API",
    "Claude Code",
  ],
  projects: [
    {
      title: "Veterinary App",
      techStack: [
        "React Native (for Web)",
        "Sentry",
        "React Query",
        "Appcues",
        "Mixpanel",
      ],
      description:
        "Application that streamlines the workflow for bustling veterinary teams, delivering key clinical insights and tools for the entire patient care process.",
    },
    {
      title: "Analytics Handler",
      techStack: [
        "Python",
        "Fast API",
        "Firebase",
        "Google Analytics",
        "Pub/Sub",
        "BigQuery",
      ],
      description:
        "A microservice that served as an Event Broker and Transformer, replacing the solution of Segment by Twilio.",
    },
    {
      title: "Wellness App",
      techStack: ["React Native", "Firebase", "Apple Health"],
      description:
        "Health and wellness app dedicated for companies that offers personalized health coaching and management, fostering healthier habits and yielding better clinical and financial outcomes.",
    },
    {
      title: "Perfume Advisor",
      techStack: ["React Native", "Ionic", "AngularJS"],
      description:
        "Web and mobile application to help select fragrance notes, as well as specific perfumes containing them.",
    },
    {
      title: "Football Social App",
      techStack: [
        "React Native",
        "Expo (Bare)",
        "Firebase",
        "Cloud Messaging",
        "Styled Components",
      ],
      description:
        "Social media platform dedicated to football. Application allows users to create unique content, share it with others and follow their favorite teams, players and review their statistics.",
    },
    {
      title: "Internal ERP",
      techStack: ["Python", "Pyramid", "React.js"],
      description:
        "A Web application for managing a company's internal processes like time logging, project management and invoicing.",
    },
    {
      title: "Inventory app",
      techStack: ["Python", "Django REST", "Expo"],
      description:
        "Mobile application developed for a client in the logistics industry to inventory equipment located throughout the country.",
    },
    {
      title: "ITPM",
      techStack: ["Python", "Django", "Vue.js", "Vuetify", "PosgreSQL"],
      description:
        "ERP system created for one of the banks to manage internal processes such as creating contracts, annexes, orders, reports and statements.",
    },
  ],
} as const;

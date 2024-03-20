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
    "Hi there! I'm Dawid, a React Native & Fullstack Developer. I'm passionate about mobile development and I love to learn new things. I'm currently working at STX Next as a Senior React Native Developer. I spend my free time at the gym, electronic music festivals and live stand-ups. Fan of Walaszek's productions.",
  avatarUrl: require("../images/cv-picture.jpeg"),
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "dawid.wietrzych@gmail.com",
    // tel: "+48728222223",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Dawwie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dawid-wietrzych/",
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
      company: "STX Next",
      link: "https://www.stxnext.com/",
      badges: ["Remote"],
      title: "Senior React Native Developer | Python Developer",
      start: "2022",
      end: "present",
      description: "",
    },
    {
      company: "Talex S.A.",
      link: "https://www.talex.pl/",
      badges: ["Onsite", "Remote"],
      title: "Deweloper Aplikacji",
      start: "2019",
      end: "2022",
      description: "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/React Native",
    "Expo",
    "Bitrise",
    "App Store Connect",
    "Google Play Console",
    "Firebase",
    "Python",
    "Django/Fast API",
  ],
  projects: [
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
    },
  ],
} as const;

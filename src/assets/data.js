import React from "react";
import {
  FaMobileAlt,
  FaFire,
  FaGlobe,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

const SKILL_ICON_CLASS = "text-2xl";

const data = {
  name: "Khaled",
  title: "Flutter Developer",
  bio: "Building scalable Flutter apps with clean architecture and Firebase",
  social: {
    github: "https://github.com/khaledgomah",
    email: "khaledgomah10@gmail.com",
    linkedin: "",
  },
  skills: [
    {
      name: "Flutter",
      icon: <FaMobileAlt className={SKILL_ICON_CLASS} />,
      color: "#027DFD",
    },
    {
      name: "Dart",
      icon: <FaCode className={SKILL_ICON_CLASS} />,
      color: "#0175C2",
    },
    {
      name: "Firebase",
      icon: <FaFire className={SKILL_ICON_CLASS} />,
      color: "#FFCA28",
    },
    {
      name: "Clean Architecture",
      icon: <FaLayerGroup className={SKILL_ICON_CLASS} />,
      color: "#8B5CF6",
    },
    {
      name: "Localization",
      icon: <FaGlobe className={SKILL_ICON_CLASS} />,
      color: "#06B6D4",
    },
  ],
  projects: [
    {
      title: "MoVement",
      description: "App for managing workflow and tasks efficiently",
      tags: ["Flutter", "Firebase", "Clean Architecture"],
      link: "https://github.com/khaledgomah/MoVement",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emoji: "🚀",
    },
    {
      title: "MoVement Supervisor",
      description: "Supervisor version of MoVement with extra features",
      tags: ["Flutter", "Firebase", "Admin"],
      link: "https://github.com/khaledgomah/MoVement-Supervisor",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      emoji: "👔",
    },
    {
      title: "Castrid",
      description: "Task management & collaboration platform",
      tags: ["Flutter", "Dart", "Collaboration"],
      link: "https://github.com/khaledgomah/Castrid",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      emoji: "📋",
    },
    {
      title: "Silent Space",
      description: "Meditation & focus app built in Flutter",
      tags: ["Flutter", "Firebase", "Meditation"],
      link: "https://github.com/khaledgomah/Silent-Space",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      emoji: "🧘",
    },
  ],
};

export default data;

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
  name: "Khaled Gomah",
  title: "Junior Flutter Developer",
  bio: "Detail-oriented Computer & Control Systems Engineer and Junior Flutter Developer with a solid foundation in Clean Architecture and BLoC. Proven experience in building production-grade apps, including IoT-integrated health platforms and enterprise transportation systems serving 2,000+ users.",
  about: "I am a passionate software engineer who loves solving complex problems and turning ideas into scalable, high-performance mobile applications. With a strong background in Computer & Control Systems Engineering from Mansoura University (Excellent with Honors), I specialize in the Flutter SDK, Dart, and Firebase. Over the past few years, I have built production-ready applications across different sectors, from IoT wearables to enterprise B2B transportation platforms.",
  stats: [
    { value: "2+ Years", label: "Experience" },
    { value: "4", label: "Published Apps" },
    { value: "2000+", label: "Daily Users" }
  ],
  social: {
    github: "https://github.com/khaledgomah",
    email: "khaledgomah10@gmail.com",
    linkedin: "https://www.linkedin.com/in/khaledgomah/",
    phone: "+201062183637",
    location: "Cairo",
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
    {
      name: "REST APIs (Dio)",
      icon: <FaGlobe className={SKILL_ICON_CLASS} />,
      color: "#FF5722",
    },
    {
      name: "SOLID Principles",
      icon: <FaCode className={SKILL_ICON_CLASS} />,
      color: "#4CAF50",
    },
    {
      name: "State Management",
      icon: <FaLayerGroup className={SKILL_ICON_CLASS} />,
      color: "#E91E63",
    },
  ],
  projects: [
    {
      title: "MoVement",
      description: "Transportation system for the B2B sector with 2,000+ daily active users.",
      tags: ["Flutter", "Firebase", "Clean Architecture"],
      appStore: "https://apps.apple.com/us/app/movment/id6753988460",
      playStore: "https://play.google.com/store/apps/details?id=com.movment.user&pcampaignid=web_share",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emoji: "🚀",
    },
    {
      title: "MoVement Supervisor",
      description: "High-performance supervisor system for real-time monitoring and trip management.",
      tags: ["Flutter", "Firebase", "Admin"],
      appStore: "https://apps.apple.com/eg/app/movment-supervisor/id6757249739",
      playStore: "https://play.google.com/store/apps/details?id=com.movment.captain&hl=en-US",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      emoji: "👔",
    },
    {
      title: "KaStride",
      description: "IoT-enabled fitness application communicating with hardware wearables via BLE.",
      tags: ["Flutter", "Dart", "IoT", "BLE"],
      playStore: "https://play.google.com/store/apps/details?id=com.kastride.app&pcampaignid=web_share",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      emoji: "📋",
    },
    {
      title: "Silent Space",
      description: "Mobile app for tracking focus sessions and measuring user productivity.",
      tags: ["Flutter", "Firebase", "Meditation"],
      github: "https://github.com/khaledgomah/silent_space.git",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      emoji: "🧘",
    },
  ],
};

export default data;

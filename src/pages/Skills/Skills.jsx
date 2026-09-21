import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";

import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Network,
  Workflow,
  Terminal,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSpringboot,
  SiDjango,
  SiOdoo,
  SiWebpack,
  SiVercel,
  SiVite,
  SiSupabase,
  SiNetlify,
  SiRailway,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";

/* ============================================================
   SKILL CARD
============================================================ */

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    {/* Shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer" />

    <CardContent className="p-6 relative z-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>

            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

/* ============================================================
   SKILLS SECTION
============================================================ */

const SkillsSection = () => {
  const skillCategories = [
    /* ========================================================
       FRONTEND
    ======================================================== */

    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",

      skills: [
        {
          name: "React",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },

        {
          name: "React Native",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },

        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },

        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },

        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },

        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },

    /* ========================================================
       BACKEND
    ======================================================== */

    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",

      skills: [
        {
          name: "Java",
          icon: <span className="text-orange-400 font-bold text-sm">☕</span>,
        },

        {
          name: "Spring Boot",
          icon: <SiSpringboot className="w-4 h-4 text-[#6DB33F]" />,
        },

        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },

        {
          name: "Django",
          icon: <SiDjango className="w-4 h-4 text-[#44B78B]" />,
        },

        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },

        {
          name: "Odoo",
          icon: <SiOdoo className="w-4 h-4 text-[#714B67]" />,
        },

        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },

        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
    },

    /* ========================================================
       UI / UX
    ======================================================== */

    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",

      skills: [
        {
          name: "Figma",
          icon: (
            <span className="w-4 h-4 flex items-center justify-center font-bold text-[#F24E1E]">
              F
            </span>
          ),
        },

        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },

        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },

        {
          name: "Prototyping",
          icon: <Workflow className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },

    /* ========================================================
       CLOUD & DEVOPS
    ======================================================== */

    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",

      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },

        {
          name: "Git",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },

        {
          name: "Linux",
          icon: <FaLinux className="w-4 h-4 text-[#FCC624]" />,
        },

        {
          name: "Vercel",
          icon: <SiVercel className="w-4 h-4 text-white" />,
        },
      ],
    },

    /* ========================================================
       TOOLS & TECHNOLOGIES
    ======================================================== */

    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",

      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },

        {
          name: "Cursor",
          icon: <Terminal className="w-4 h-4 text-cyan-400" />,
        },

        {
          name: "Webpack",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },

        {
          name: "Vite",
          icon: <SiVite className="w-4 h-4 text-[#646CFF]" />,
        },

        {
          name: "Supabase",
          icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" />,
        },

        {
          name: "Netlify",
          icon: <SiNetlify className="w-4 h-4 text-[#00C7B7]" />,
        },

        {
          name: "Railway",
          icon: <SiRailway className="w-4 h-4 text-white" />,
        },

        {
          name: "pgAdmin",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
      ],
    },

    /* ========================================================
       CREA{
          name: "Postman",
          icon: <span className="text-[#FF6C37] font-bold text-sm">↗</span>,
        },TIVE / MODELING
    ======================================================== */

    {
      icon: Paintbrush,
      title: "Creative & Modeling",
      color: "text-yellow-400",

      skills: [
        {
          name: "Draw.io",
          icon: <Network className="w-4 h-4 text-[#F2B705]" />,
        },

        {
          name: "Looping",
          icon: <Workflow className="w-4 h-4 text-[#38BDF8]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* ======================================================
          GRID BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <section className="container mx-auto px-4 py-11 relative z-10">
        {/* Technology Cloud */}

        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      {/* ======================================================
          ANIMATIONS & BACKGROUND
      ====================================================== */}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );

          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;

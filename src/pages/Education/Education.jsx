import React, { useState } from "react";
import {
  Calendar,
  BookOpen,
  GraduationCap,
  Code2,
  Database,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Licence en Informatique — Génie Logiciel",
      school: "École Polytechnique de Lomé (EPL)",
      mascot: "🎓",
      year: "2025 — present",
      achievements: [
        "Génie Logiciel",
        "Sciences et Technologies",
        "Projet tutoré",
      ],
      skills: [
        "Programmation",
        "Génie logiciel",
        "Bases de données",
        "Développement web",
        "Algorithmique",
      ],
      description:
        "Formation orientée vers la conception, le développement et la maintenance de solutions logicielles, avec un intérêt particulier pour le développement web, les bases de données et les architectures logicielles.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />

        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-10 h-10 text-teal-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Academic Journey
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My academic journey in software engineering and computer science,
            building the foundations for my career as a software developer.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02] shadow-lg shadow-teal-500/10"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                {/* Degree */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{edu.mascot}</span>

                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  {/* School */}
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>

                  {/* Year */}
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                {/* Academic Focus */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-teal-400" />
                    Academic Focus
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    Skills Developed
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Direction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4" />

          <p className="text-gray-300 leading-relaxed">
            Beyond my academic studies, I continuously develop my skills through
            personal projects and hands-on experimentation with modern
            technologies, software architecture, web development, mobile
            development and intelligent systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

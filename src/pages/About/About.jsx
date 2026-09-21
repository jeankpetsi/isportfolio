import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Brain,
  Download,
  ArrowDown,
} from "lucide-react";

const About = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const code = `const profile = {
  name: 'Jean KPETSI',
  title: 'Software Engineer | Full-Stack Developer | Tech Enthusiast',

  skills: [
    'Java', 'Python', 'JavaScript', 'TypeScript', 'React.js',
    'React Native', 'Node.js', 'Spring Boot', 'Django',
    'PostgreSQL', 'SQL', 'Tailwind CSS', 'Git', 'GitHub',
    'Linux', 'Docker'
  ],

  interests: [
    'Software Engineering',
    'Web Development',
    'Mobile Development',
    'Artificial Intelligence',
    'Intelligent Systems',
    'Open Source'
  ],

  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  creativeThinker: true,

  hireable: function() {
    return (
      this.hardWorker &&
      this.quickLearner &&
      this.problemSolver &&
      this.skills.length >= 10
    );
  }
};`;

  /*
   * ============================================================
   * TERMINAL TYPING ANIMATION
   * ============================================================
   */

  useEffect(() => {
    let index = 0;
    let typingTimeout;
    let restartTimeout;

    const typeCode = () => {
      if (index < code.length) {
        setDisplayedCode(code.substring(0, index + 1));
        index++;

        typingTimeout = setTimeout(typeCode, 10);
      } else {
        setIsTyping(false);

        restartTimeout = setTimeout(() => {
          index = 0;
          setDisplayedCode("");
          setIsTyping(true);
          typeCode();
        }, 5000);
      }
    };

    typeCode();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(restartTimeout);
    };
  }, [code]);

  /*
   * ============================================================
   * JAVASCRIPT SYNTAX HIGHLIGHTING
   * ============================================================
   */

  const highlightCode = (text) => {
    const tokens = text.split(
      /(\b(?:const|return|function)\b|'[^']*'|\b(?:true|false)\b|\b\d+\b|[{}[\](),:;.])/g,
    );

    return tokens.map((token, index) => {
      if (!token) return null;

      // JavaScript keywords
      if (/^(const|return|function)$/.test(token)) {
        return (
          <span key={index} className="text-pink-400">
            {token}
          </span>
        );
      }

      // Strings
      if (/^'.*'$/.test(token)) {
        return (
          <span key={index} className="text-blue-300">
            {token}
          </span>
        );
      }

      // Boolean
      if (/^(true|false)$/.test(token)) {
        return (
          <span key={index} className="text-cyan-400">
            {token}
          </span>
        );
      }

      // Numbers
      if (/^\d+$/.test(token)) {
        return (
          <span key={index} className="text-orange-400">
            {token}
          </span>
        );
      }

      // Brackets / punctuation
      if (/^[{}[\](),:;.]$/.test(token)) {
        return (
          <span key={index} className="text-gray-400">
            {token}
          </span>
        );
      }

      // Default
      return (
        <span key={index} className="text-gray-300">
          {token}
        </span>
      );
    });
  };

  /*
   * ============================================================
   * TECHNOLOGIES
   * ============================================================
   */

  const technologies = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "React.js",
    "React Native",
    "Spring Boot",
    "Django",
    "Node.js",
    "PostgreSQL",
    "SQL",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Docker",
    "Linux",
  ];

  /*
   * ============================================================
   * HIGHLIGHTS
   * ============================================================
   */

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Readable & maintainable",
      color: "cyan",
    },
    {
      icon: Layers,
      title: "Architecture",
      description: "Modern software solutions",
      color: "blue",
    },
    {
      icon: Cpu,
      title: "Innovation",
      description: "Technology-driven ideas",
      color: "purple",
    },
    {
      icon: Brain,
      title: "Intelligent Systems",
      description: "Exploring AI & automation",
      color: "emerald",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#04081A] text-white pt-28 pb-20"
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#04081A_85%)]" />

      {/* Cyan glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Blue glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      {/* Purple glow */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[120px]" />

      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ======================================================
            TOP STATUS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/5 border border-cyan-400/20 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs sm:text-sm text-cyan-300 tracking-wide">
              Open to Projects & Collaborations
            </span>
          </div>
        </motion.div>

        {/* ======================================================
            MAIN HERO
        ====================================================== */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-center">
          {/* ====================================================
              LEFT SIDE
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* ==================================================
                UI MAGIC
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 left-24 hidden lg:block"
            >
              <div className="relative px-5 py-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                <div className="absolute -inset-1 rounded-lg bg-purple-500/10 blur-lg -z-10" />

                <span className="text-sm font-medium text-purple-300">
                  UI Magic
                </span>
              </div>
            </motion.div>

            {/* ==================================================
                CLEAN CODE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-44 -right-1 hidden lg:block"
            >
              <div className="relative px-5 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                <div className="absolute -inset-1 rounded-lg bg-blue-500/10 blur-lg -z-10" />

                <span className="text-sm font-medium text-blue-300">
                  Clean Code
                </span>
              </div>
            </motion.div>

            {/* ==================================================
                WELCOME
            ================================================== */}

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-400/20">
              <span className="w-2 h-2 rounded-full bg-blue-400" />

              <span className="text-sm text-gray-300">
                Welcome to my universe
              </span>
            </div>

            {/* ==================================================
                MAIN TITLE
            ================================================== */}

            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.95] tracking-tight">
                <span className="block text-white">Hello</span>

                <span className="block mt-3">
                  I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Jean KPETSI
                  </span>
                </span>
              </h1>

              <div className="absolute -z-10 left-20 bottom-0 w-72 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>

            {/* ==================================================
                ROLE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
                <Code2 className="w-5 h-5 mr-3 text-cyan-400" />

                <span className="text-lg sm:text-xl text-gray-200">
                  Software Engineer
                  <span className="text-cyan-400 mx-2">|</span>
                  Full-Stack Developer
                </span>
              </div>
            </motion.div>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-7 max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
              I'm a software engineering student passionate about building
              modern web and mobile applications, designing scalable software
              solutions and exploring intelligent systems.
            </p>

            <p className="mt-4 max-w-xl text-gray-500 leading-relaxed">
              I enjoy turning ideas into practical digital products using
              technologies such as <span className="text-cyan-400">Java</span>,{" "}
              <span className="text-cyan-400">Python</span>,{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">TypeScript</span>,{" "}
              <span className="text-cyan-400">Spring Boot</span>,{" "}
              <span className="text-cyan-400">Django</span>,{" "}
              <span className="text-cyan-400">Node.js</span> and{" "}
              <span className="text-cyan-400">PostgreSQL</span>.
            </p>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#skills"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] transition-shadow duration-300"
              >
                Learn More
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.03] border border-gray-700 text-gray-300 font-medium hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
              >
                Get Resume
                <Download className="w-4 h-4" />
              </motion.a>
            </div>

            {/* ==================================================
                FLOATING HIGHLIGHTS
            ================================================== */}

            <div className="grid grid-cols-2 gap-3 mt-10">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="group p-4 rounded-xl bg-white/[0.025] border border-white/[0.07] backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />

                    <h3 className="text-sm font-semibold text-gray-200">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ====================================================
              RIGHT SIDE — TERMINAL
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            {/* Terminal glow */}

            <div className="absolute -inset-5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl rounded-3xl" />

            <div className="relative rounded-2xl overflow-hidden border border-cyan-400/60 bg-[#08111F]/95 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              {/* Terminal header */}

              <div className="h-12 flex items-center justify-between px-5 bg-[#0D2235] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Code2 className="w-4 h-4" />
                  developer.js
                </div>

                <div className="w-16" />
              </div>

              {/* Terminal body */}

              <div className="min-h-[520px] max-h-[620px] overflow-auto p-6 sm:p-8 font-mono text-sm leading-7 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <pre className="whitespace-pre-wrap break-words">
                  <code>
                    {highlightCode(displayedCode)}

                    {isTyping && (
                      <span className="inline-block w-2 h-5 ml-1 bg-cyan-400 align-middle animate-pulse" />
                    )}
                  </code>
                </pre>
              </div>

              {/* Terminal footer */}

              <div className="flex items-center justify-between px-5 py-3 bg-[#0A1727] border-t border-white/5 text-xs text-gray-500">
                <span>~/portfolio</span>

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  online
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ======================================================
            TECHNOLOGIES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/40" />

            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-cyan-400" />

              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Technologies
              </span>
            </div>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 text-sm hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ======================================================
            STATS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-14"
        >
          {/* Projects */}

          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 text-center rounded-2xl bg-white/[0.025] border border-white/[0.07] backdrop-blur-md overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <Code2 className="w-6 h-6 mx-auto text-cyan-400 mb-3" />

              <div className="text-3xl font-bold text-white">03</div>

              <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                Featured Projects
              </div>
            </div>
          </motion.div>

          {/* Technologies */}

          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 text-center rounded-2xl bg-white/[0.025] border border-white/[0.07] backdrop-blur-md overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <Database className="w-6 h-6 mx-auto text-blue-400 mb-3" />

              <div className="text-3xl font-bold text-white">10+</div>

              <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                Technologies
              </div>
            </div>
          </motion.div>

          {/* Learning */}

          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-6 text-center rounded-2xl bg-white/[0.025] border border-white/[0.07] backdrop-blur-md overflow-hidden hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <Brain className="w-6 h-6 mx-auto text-purple-400 mb-3" />

              <div className="text-3xl font-bold text-white">∞</div>

              <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                Continuous Learning
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================
            BOTTOM SIGNATURE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-14"
        >
          <div className="flex items-center gap-3 text-sm font-mono text-gray-600">
            <span className="text-cyan-500/60">&lt;</span>

            <span className="hover:text-cyan-400 transition-colors">build</span>

            <span className="text-gray-700">/</span>

            <span className="hover:text-blue-400 transition-colors">learn</span>

            <span className="text-gray-700">/</span>

            <span className="hover:text-purple-400 transition-colors">
              innovate
            </span>

            <span className="text-cyan-500/60">/&gt;</span>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          FLOATING SIDE ICONS
      ======================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[3%] top-[45%] hidden 2xl:block opacity-20"
      >
        <Cpu className="w-10 h-10 text-cyan-400" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[3%] top-[55%] hidden 2xl:block opacity-20"
      >
        <Layers className="w-10 h-10 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default About;

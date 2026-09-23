import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import PropTypes from "prop-types";

import auramarketImage from "../../assets/images/auramarket.png";
import synapselinkImage from "../../assets/images/synapselink.png";
import typingracerImage from "../../assets/images/tapingracer.png";

const projects = [
  {
    title: "AuraMarket",
    description:
      "A multi-vendor marketplace designed to connect sellers and customers. Sellers can showcase their products while customers can discover, view and order products through a modern digital platform.",
    src: auramarketImage,
    color: "#8f89ff",
    githubLink: "https://github.com/JeanJAKK/AuraMarket",
    liveLink: null,
  },
  {
    title: "SynapseLink",
    description:
      "A modern social network application focused on knowledge sharing and interaction. Users can create accounts, publish text and image posts, interact with content and switch between light and dark themes.",
    src: synapselinkImage,
    color: "#06b6d4",
    githubLink: "https://github.com/JeanJAKK/Dev-lab-Mini-r-seau-social-",
    liveLink: "https://dev-lab-mini-r-seau-social-seven.vercel.app/",
  },
  {
    title: "TYPINGRACER",
    description:
      "An interactive typing race application designed to help users improve their typing speed and accuracy through word and phrase challenges, scoring and an immersive cyberpunk-inspired interface.",
    src: typingracerImage,
    color: "#06b6d4",
    githubLink: "https://github.com/JeanJAKK/TYPINGRACER",
    liveLink: "https://typingracer-one.vercel.app/",
  },
];

export default function Projects() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Styles spécifiques pour les écrans 1366x768
    const style = document.createElement("style");

    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {

        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }

        .project-container {
          height: 90vh;
        }
      }
    `;

    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");

        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");

        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();

    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,

          /*
           * SEULE MODIFICATION :
           * espace supplémentaire uniquement
           * pour la première card.
           */
          marginTop: i === 0 ? "120px" : "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: {
            duration: 0.3,
          },
        }}
      >
        {/* =====================================================
            CARD
        ===================================================== */}

        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* ===================================================
              IMAGE
          =================================================== */}

          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = `https://placehold.co/1200x900/0f172a/f8fafc?text=${encodeURIComponent(title)}`;
              }}
              className="w-full h-full object-cover"
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
              }}
            />

            {/* Overlay coloré */}

            <motion.div
              className="absolute inset-0"
              style={{
                backgroundColor: color,
                mixBlendMode: "overlay",
              }}
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 0.3,
              }}
              transition={{
                duration: 0.3,
              }}
            />

            {/* Numéro du projet */}

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          {/* ===================================================
              CONTENT
          =================================================== */}

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Header */}

              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />

                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />

                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  Featured Project
                </span>
              </div>

              {/* Title */}

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>

              {/* Description */}

              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            {/* =================================================
                LINKS
            ================================================= */}

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub */}

                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>

                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{
                      color,
                    }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live */}

                {liveLink ? (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />

                      <line x1="2" y1="12" x2="22" y2="12" />

                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>

                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{
                        color,
                      }}
                    >
                      Live
                    </span>
                  </motion.a>
                ) : (
                  <span className="text-xs md:text-sm text-gray-600">
                    Live demo coming soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   PROP TYPES
========================================================= */

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};

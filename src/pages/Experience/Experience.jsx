import React from "react";
import {
  Code2,
  GraduationCap,
  Cpu,
  Database,
  Network,
  Smartphone,
} from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />

        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>

          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full w-fit">
            {period}
          </span>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>

      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: GraduationCap,
      title: "Software Engineering Student",
      company: "École Polytechnique de Lomé (EPL)",
      period: "2025 — Present",
      description:
        "Formation en Informatique, spécialité Génie Logiciel, avec un intérêt particulier pour la conception logicielle, le développement d'applications, les bases de données et les architectures modernes.",
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      company: "Projets personnels",
      period: "2025 — Present",
      description:
        "Conception et développement d'applications web modernes avec React, TypeScript, JavaScript, Node.js, Java, Spring Boot, Python et Django, de l'interface utilisateur jusqu'à la logique métier.",
    },
    {
      icon: Network,
      title: "AuraMarket",
      company: "Projet Marketplace Multi-Vendeur",
      period: "Projet en développement",
      description:
        "Développement d'une marketplace permettant aux vendeurs de proposer leurs produits et aux clients de rechercher, consulter et commander des produits. Le projet s'appuie notamment sur Odoo, Python, PostgreSQL, JavaScript et des technologies web modernes.",
    },
    {
      icon: Smartphone,
      title: "SynapseLink",
      company: "Projet Web — Réseau Social",
      period: "Projet réalisé",
      description:
        "Création d'une application web sociale permettant aux utilisateurs de s'inscrire, publier du contenu avec des images, interagir avec les publications et personnaliser l'apparence de l'application avec les thèmes clair et sombre.",
    },
    {
      icon: Cpu,
      title: "TYPINGRACER",
      company: "Projet Web — React",
      period: "Projet réalisé",
      description:
        "Développement d'une application interactive permettant d'améliorer et de tester sa vitesse de frappe avec des modes mots et phrases, un système de score et une interface inspirée de l'univers cyberpunk.",
    },
    {
      icon: Database,
      title: "Exploration des systèmes intelligents",
      company: "Apprentissage & Projets",
      period: "En cours",
      description:
        "Approfondissement progressif des concepts liés à l'intelligence artificielle, aux systèmes intelligents, aux bases de données et à la conception de solutions logicielles modernes.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 mt-10">
        {/* Header */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              My Journey
            </h2>

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>

          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-3xl">
            From software engineering studies to building modern web
            applications and exploring intelligent systems.
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.title}-${index}`} {...exp} />
          ))}
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default ExperienceSection;

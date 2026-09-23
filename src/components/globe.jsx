import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Frontend
  "react",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "tailwindcss",

  // Backend
  "java",
  "openjdk",
  "spring",
  "springboot",
  "python",
  "django",
  "nodedotjs",
  "odoo",

  // Database
  "postgresql",
  "supabase",
  "pgadmin",

  // Cloud & DevOps
  "docker",
  "git",
  "github",
  "linux",
  "vercel",
  "netlify",
  "railway",

  // IDE & Tools
  "visualstudiocode",
  "cursor",
  "vite",
  "apache-netbeans",

  // Modeling
  "drawio",
  "looping",
  "merise",
  "uml",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;

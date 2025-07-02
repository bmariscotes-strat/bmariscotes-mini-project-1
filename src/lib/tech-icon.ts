import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiJavascript,
  SiLaravel,
  SiVuedotjs,
  SiPython,
  SiFlask,
  SiHtml5,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiGithub,
  SiGit,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

interface TechConfig {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const TECH_ICONS: Record<string, TechConfig> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000000" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  Python: { icon: SiPython, color: "#3776AB" },
  Flask: { icon: SiFlask, color: "#000000" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  AWS: { icon: SiAmazon, color: "#FF9900" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Photoshop: { icon: SiAdobephotoshop, color: "#31A8FF" },
};

interface TechnologyBadgeProps {
  technology: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export function TechnologyBadge(props: TechnologyBadgeProps) {
  const { technology, size = "md", showIcon = true, className = "" } = props;
  const techConfig = TECH_ICONS[technology];
  const IconComponent = techConfig?.icon;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-2 text-sm gap-2",
    lg: "px-4 py-3 text-base gap-3",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const baseClasses =
    "inline-flex items-center rounded-lg font-medium transition-all duration-200 bg-white border border-gray-200 text-gray-700 hover:shadow-md " +
    sizeClasses[size] +
    " " +
    className;

  return React.createElement(
    "span",
    { className: baseClasses },
    showIcon &&
      IconComponent &&
      React.createElement(IconComponent, {
        className: iconSizes[size],
        style: { color: techConfig.color },
      }),
    technology
  );
}

interface TechnologiesListProps {
  technologies: string[];
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export function TechnologiesList(props: TechnologiesListProps) {
  const { technologies, size = "md", showIcon = true, className = "flex flex-wrap gap-2" } = props;

  return React.createElement(
    "div",
    { className: className },
    technologies.map((technology) =>
      React.createElement(TechnologyBadge, {
        key: technology,
        technology: technology,
        size: size,
        showIcon: showIcon,
      })
    )
  );
}

export function getTechIcon(techName: string) {
  return TECH_ICONS[techName] || null;
}

export function getAllTechNames(): string[] {
  return Object.keys(TECH_ICONS);
}

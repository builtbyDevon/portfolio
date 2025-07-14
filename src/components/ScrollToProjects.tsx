"use client";
import { Book } from "lucide-react";

export default function ScrollToProjects() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects-section");
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#projects-section"
      onClick={handleClick}
      className="bg-highlight-green inline-flex items-center gap-2 rounded-lg px-8 py-3 text-lg font-semibold text-neutral-900 transition-all hover:scale-105 hover:bg-opacity-80"
    >
      <Book size={20} strokeWidth={2} />
      See my projects
    </a>
  );
}

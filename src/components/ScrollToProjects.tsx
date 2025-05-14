"use client";

import { useEffect } from "react";

export function ScrollToProjects() {
  useEffect(() => {
    // Check if we just navigated back from a project page
    const fromProject = sessionStorage.getItem("fromProject");
    if (fromProject) {
      // Clear the flag
      sessionStorage.removeItem("fromProject");

      // Scroll to projects section with a slight delay to ensure page is loaded
      setTimeout(() => {
        const projectsSection = document.getElementById("projects-section");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 2000);
    }
  }, []);

  return null;
}

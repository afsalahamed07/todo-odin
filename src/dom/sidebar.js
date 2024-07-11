import { AddButton } from "./addButton.js";

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add(
    "bg-gradient-to-r",
    "from-red-100",
    "to-red-50",
    "rounded-md",
    "p-4",
    "flex",
    "flex-col",
    "h-screen",
    "basis-1/6",
    "flex-none",
    "justify-between"
  );

  const title = document.createElement("h1");
  title.classList.add(
    "font-gugi",
    "mx-auto",
    "mt-2",
    "text-2xl",
    "font-bold",
    "tracking-wider",
    "text-red-700",
  );
  title.innerHTML = "Odin to Do";
  sidebar.appendChild(title);

  const projects = document.createElement("div");
  projects.classList.add("flex", "flex-col", "mt-4");
  sidebar.appendChild(projects);

  const getSiderbar = () => sidebar;

  const appendProject = (project) => {
    projects.appendChild(project.getNav());
  };


  return { getSiderbar, appendProject };
}

export { createSidebar };

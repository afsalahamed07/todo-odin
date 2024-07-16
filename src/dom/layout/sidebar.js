function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.innerHTML = "Odin to Do";
  sidebar.appendChild(title);

  const projects = document.createElement("div");
  projects.classList.add("projects");
  sidebar.appendChild(projects);

  const getSiderbar = () => sidebar;

  const appendProject = (project) => {
    projects.appendChild(project.getNav());
  };

  return { getSiderbar, appendProject };
}

export { createSidebar };

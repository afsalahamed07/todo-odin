function createSidebar() {
  let env;

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.innerHTML = "Odin to Do";
  sidebar.appendChild(title);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");
  sidebar.appendChild(projectsDiv);

  const getSiderbar = () => sidebar;

  const appendProject = (project) => {
    projectsDiv.appendChild(project.getButton());
  };

  const setEnvironment = (envRef) => {
    env = envRef;
  };

  return { getSiderbar, appendProject, setEnvironment };
}

export { createSidebar };

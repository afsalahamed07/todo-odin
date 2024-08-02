function environment() {
  let projects = [];
  let currentProject = null;

  const getProjects = () => projects;

  const getCurrentProject = () => currentProject;

  const setCurrentProject = (project) => {
    currentProject = project;
  };

  const addProject = (project) => {
    projects.push(project);
  };

  return { getProjects, getCurrentProject, setCurrentProject, addProject };
}

export { environment };

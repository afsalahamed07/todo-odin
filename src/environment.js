function environment(todoContainer) {
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

  const getTodoContainer = () => todoContainer;

  return {
    getProjects,
    getCurrentProject,
    setCurrentProject,
    addProject,
    getTodoContainer,
  };
}

export { environment };

import { Project } from "../domain/project.js";

function projectBuilder() {
  const project = Project();

  const setTitle = function (title) {
    project.setTitle(title);
    return this;
  };

  const setDescription = function (description) {
    project.setDescription(description);
    return this;
  };

  const setDueDate = function (dueDate) {
    project.setDueDate(dueDate);
    return this;
  };

  const setPriority = function (priority) {
    project.setPriority(priority);
    return this;
  };

  const setIsDone = function (isDone) {
    project.setIsDone(isDone);
    return this;
  };

  const build = function () {
    return project;
  };

  return {
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setIsDone,
    build,
  };
}

export { projectBuilder };

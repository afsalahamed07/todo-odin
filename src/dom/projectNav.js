/*
@param Project project
@param TodoView target
@return ProjectNavigation
*/
function ProjectNavigation(project, target) {
  let _project = project;
  let _target = target;

  const nav = document.createElement("div");
  nav.classList.add("project");

  const title = document.createElement("h1");
  title.classList.add("project-title");
  title.innerHTML = _project.getTitle();
  nav.appendChild(title);

  const getNav = () => nav;

  const getProjectTodos = () => _project.getTodos();

  nav.addEventListener("click", () => {
    _target.clean();
    _project.getTodos().forEach((todo) => {
      _target.addTodo(todo);
    });
  });

  return { getNav, getProjectTodos };
}

export { ProjectNavigation };

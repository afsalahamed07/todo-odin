import { createButton } from "../components/button";

/*
@param Project project
@param TodoView target
@return ProjectNavigation
*/
function ProjectNavigation(project, target) {
  let _project = project;
  let _target = target;

  const getProjectTodos = () => _project.getTodos();

  const onClick = () => {
    _target.clean();
    _project.getTodos().forEach((todo) => {
      _target.addTodo(todo);
    });
  };

  const nav = createButton("P", _project.getTitle(), onClick);
  nav.classList.add("project");

  const getNav = () => nav;

  return { getNav, getProjectTodos };
}

export { ProjectNavigation };

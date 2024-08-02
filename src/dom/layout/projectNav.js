import { createButton } from "../components/button";
import { todoView } from "../components/todoView";

/*
@param Project project
@param TodoView target
@return ProjectNavigation
*/
function createProjectButton(project, target, env) {
  const getProjectTodos = () => project.getTodos();

  const onClick = () => {
    env.setCurrentProject(project);

    target.clean();
    // change the sidebar state
    // trigger re-render
    project.getTodos().forEach((todo) => {
      todo = todoView(todo);
      target.addTodo(todo.render());
    });
  };

  const nav = createButton("P", project.getTitle());
  nav.setOnClick(onClick);
  nav.setClass(["project"]);

  return Object.assign(nav, { getProjectTodos });
}

export { createProjectButton };

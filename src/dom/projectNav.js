/*
@param Project project
@param TodoView target
@return ProjectNavigation
*/
function ProjectNavigation(project, target) {
  let _project = project;
  let _target = target;

  const nav = document.createElement("div");
  nav.classList.add(
    "bg-neutral-50",
    "bg-opacity-[40%]",
    "hover:bg-opacity-[60%]",
    "hover:shadow-sm",
    "hover:cursor-pointer",
    "transtion-all",
    "ease-in-out",
    "duration-500",
    "rounded-md",
    "p-4",
    "flex-col",
    "flex-none",
    "mx-auto",
    "mt-2",
  );

  const title = document.createElement("h1");
  title.classList.add("text-xl", "font-bold", "tracking-wider");
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

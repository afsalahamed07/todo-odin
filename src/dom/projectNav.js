function createProjectNav(project) {
  let _project = project;

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

  return { getNav };
}

export { createProjectNav };

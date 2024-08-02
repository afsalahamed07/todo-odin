import { ProjectNavigation } from "../layout/projectNav.js";
import { createProjectButton } from "../layout/projectNav.js";
import { Project } from "../../domain/project.js";
import { createDialog } from "./dialog.js";

/*
 * @param Sidebar sideBar
 */
function ProjectDialog(sideBar, todoContainer) {
  const dialog = createDialog();

  dialog.setTitle("Create a new project");

  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-4");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "project-name");
  nameLabel.innerHTML = "Project name";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "project-name");
  nameInput.setAttribute("name", "project-name");
  nameInput.setAttribute("required", "true");
  nameInput.classList.add("rounded-md", "p-2", "border-solid", "border-2");

  form.appendChild(nameInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "project-description");
  descriptionLabel.innerHTML = "Project description";
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "project-description");
  descriptionInput.setAttribute("name", "project-description");
  descriptionInput.classList.add(
    "rounded-md",
    "p-2",
    "border-solid",
    "border-2",
  );

  form.appendChild(descriptionInput);

  const submitButton = document.createElement("button");
  submitButton.classList.add(
    "bg-red-500",
    "text-white",
    "rounded-md",
    "p-2",
    "hover:bg-red-800",
  );

  submitButton.innerHTML = "Create project";
  form.appendChild(submitButton);

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let project = Project();
    project.setTitle(nameInput.value);
    project.setDescription(descriptionInput.value || "No description");
    let projectNav = ProjectNavigation(project, todoContainer);
    let projectNav = createProjectButton(project, todoContainer);
    sideBar.appendProject(projectNav);

    close();
  });

  dialog.addToDialog(form);

  return Object.assign(dialog, {});
}

export { ProjectDialog };

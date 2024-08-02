import { createProjectButton } from "../layout/projectNav.js";
import { Project } from "../../domain/project.js";
import { createInputPair } from "./inputPair.js";
import { createDialog } from "./dialog.js";
import { createSubmitButton } from "./submitButton.js";

/*
 * @param Sidebar sideBar
 */
function ProjectDialog(sideBar, todoContainer) {
  const dialog = createDialog();

  dialog.setTitle("Create a new project");

  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-4");

  const nameInput = createInputPair("Project name", true, "Project name");

  form.appendChild(nameInput.getPair());

  const descriptionInput = createInputPair(
    "Project description",
    false,
    "Project description",
  );
  form.appendChild(descriptionInput.getPair());

  const submitButton = createSubmitButton();

  form.appendChild(submitButton.getButton());

  const onClick = (e) => {
    e.preventDefault();
    let project = Project();
    project.setTitle(nameInput.getValue());
    project.setDescription(descriptionInput.getValue() || "No description");
    let projectNav = createProjectButton(project, todoContainer);
    sideBar.appendProject(projectNav);
    dialog.close();
  };
  submitButton.setOnClick(onClick);

  dialog.addToDialog(form);

  return Object.assign(dialog, {});
}

export { ProjectDialog };

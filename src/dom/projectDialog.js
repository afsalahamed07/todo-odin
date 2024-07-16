import { projectBuilder } from "../infrastructure/projectBuilder.js";
import { ProjectNavigation } from "./layout/projectNav.js";

/*
 * @param Sidebar sideBar
 */
function ProjectDialog(sideBar, todoContainer) {
  const dialog = document.createElement("dialog");
  dialog.classList.add("p-4", "shadow-lg", "rounded-lg", "pb-8");
  const dialogContents = document.createElement("div");
  dialog.appendChild(dialogContents);

  dialogContents.classList.add(
    "w-96",
    "bg-white",
    "p-4",
    "flex",
    "flex-col",
    "gap-2",
  );

  const closeDiv = document.createElement("div");
  closeDiv.classList.add("flex", "justify-end");
  dialogContents.appendChild(closeDiv);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add(
    "rounded-full",
    "hover:text-red-600",
    "hover:cursor-pointer",
    "outline-none",
    "font-black",
  );
  closeBtn.innerHTML = "X";
  closeBtn.addEventListener("click", () => {
    console.log("close");
    close();
  });
  closeDiv.appendChild(closeBtn);

  const title = document.createElement("h2");
  title.classList.add("text-xl", "font-bold", "text-center", "text-red-600");

  title.innerHTML = "New Project";
  dialogContents.appendChild(title);

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
    let project = projectBuilder()
      .setTitle(nameInput.value)
      .setDescription(descriptionInput.value || "No description")
      .build();
    let projectNav = ProjectNavigation(project, todoContainer);
    sideBar.appendProject(projectNav);

    close();
  });

  dialogContents.appendChild(form);

  const getDialog = () => dialog;

  const close = () => dialog.close();

  const show = () => dialog.showModal();

  return { getDialog, show, close };
}

export { ProjectDialog };

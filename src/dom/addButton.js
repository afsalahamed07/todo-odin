import { ProjectDialog } from "./projectDialog.js";

function AddButton(sidebar, todoContainer) {
  const addButton = document.createElement("div");
  const addIcon = document.createElement("p");

  addButton.classList.add(
    "mx-auto",
    "font-gugi",
    "px-4",
    "py-2",
    "bg-neutral-50",
    "bg-opacity-[40%]",
    "hover:bg-opacity-[60%]",
    "hover:shadow-sm",
    "rounded-md",
    "font-bold",
    "hover:cursor-pointer",
  );

  addButton.appendChild(addIcon);
  addIcon.innerHTML = "Add";

  const getButton = () => addButton;

  addButton.addEventListener("click", () => {
    const dialog = ProjectDialog(sidebar, todoContainer);
    document.body.appendChild(dialog.getDialog());
    dialog.show();
  });

  return { getButton };
}

export { AddButton };

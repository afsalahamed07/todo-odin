import { ProjectDialog } from "../projectDialog.js";
import { createButton } from "./button.js";

function createProjectAddButton(sidebar, todoContainer) {
  const onClick = () => {
    const dialog = ProjectDialog(sidebar, todoContainer);
    document.body.appendChild(dialog.getDialog());
    dialog.show();
  };

  const addButton = createButton("+", "Add", onClick)
  const getButton = () => addButton;

  return { getButton };
}

export { createProjectAddButton }

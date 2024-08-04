import { ProjectDialog } from "./projectDialog.js";
import { createButton } from "./button.js";

function createProjectAddButton(sidebar, todoContainer, env) {
  const onClick = () => {
    const dialog = ProjectDialog(sidebar, todoContainer, env);
    dialog.open();
  };

  const addButton = createButton("+", "Add");

  addButton.setOnClick(onClick);

  return addButton;
}

export { createProjectAddButton };

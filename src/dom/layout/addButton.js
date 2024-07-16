import { ProjectDialog } from "../projectDialog.js";
import { createButton } from "../components/button.js";

function ProjectAddButton(sidebar, todoContainer) {
  const onClick = () => {
    const dialog = ProjectDialog(sidebar, todoContainer);
    document.body.appendChild(dialog.getDialog());
    dialog.show();
  };

  const addButton = createButton("+", "Add", onClick)
  const getButton = () => addButton;

  return { getButton };
}

export { ProjectAddButton as AddButton }

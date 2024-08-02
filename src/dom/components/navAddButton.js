import { createButton } from "./button.js";
import { createTodoForm } from "./todoForm.js";

function todoAddButton(envRef) {

  const onClick = () => {
    const todoForm = createTodoForm(envRef);
    todoForm.open();
  };

  const navAdd = createButton("+", "Add");
  navAdd.setOnClick(onClick);

  return Object.assign(navAdd, {});
}

export { todoAddButton };

import { createButton } from "./button.js";
import { createTodoForm } from "../todoForm.js";

function createNavAddButton() {
  const onClick = () => {
    const todoForm = createTodoForm();

    todoForm.show();
  };

  const navAdd = createButton("+", "Add");
  navAdd.setOnClick(onClick);

  return Object.assign(navAdd, {});
}

export { createNavAddButton };

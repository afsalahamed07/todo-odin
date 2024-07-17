import { createButton } from "./button.js";
import { createTodoForm } from "../todoForm.js";

function createNavAddButton() {

  const onClick = () => {
    const todoForm = createTodoForm();

    todoForm.show();
  };

  const navAdd = createButton("+", "Add", onClick);

  const getNavAddButton = () => navAdd;
  return { getNavAddButton };
}

export { createNavAddButton };

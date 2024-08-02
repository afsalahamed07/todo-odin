import { createInputPair } from "./inputPair.js";
import { createDialog } from "./dialog.js";
import { createSubmitButton } from "./submitButton.js";
import { Todo } from "../../domain/todo.js";

function createTodoForm(envRef) {
  let env = envRef;

  const dialog = createDialog();

  dialog.setTitle("Create Todo");

  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-4");

  const nameInput = createInputPair("Title", true, "Title");

  form.appendChild(nameInput.getPair());

  const descriptionInput = createInputPair("Description", false, "Description");
  form.appendChild(descriptionInput.getPair());

  const submitButton = createSubmitButton();

  form.appendChild(submitButton.getButton());

  const onClick = (e) => {
    e.preventDefault();
    let todo = Todo();
    todo.setTitle(nameInput.getValue());
    todo.setDescription(descriptionInput.getValue() || "No description");
    todo.setDueDate(new Date());
    todo.setPriority(1);
    todo.setIsDone(false);

    let currentProject = env.getCurrentProject();
    currentProject.addTodo(todo);

    dialog.close();
  };

  submitButton.setOnClick(onClick);

  dialog.addToDialog(form);

  return Object.assign(dialog, {});
}

export { createTodoForm };

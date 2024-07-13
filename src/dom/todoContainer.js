import { todoView } from "./todoView.js";

function createTodoContainer() {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add(
    "flex",
    "flex-col",
    "gap-5",
    "p-4",
    "grow",
    "mt-4",
  );
  todoContainer.classList.add("todo-container");

  const getTodoContainer = () => todoContainer;

  const addTodo = (todo) => {
    todoContainer.appendChild(todoView(todo).render());
  };

  const clean = () => {
    todoContainer.innerHTML = "";
  };

  return { getTodoContainer, addTodo, clean };
}

export { createTodoContainer };

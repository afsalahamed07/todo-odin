function createTodoContainer() {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const getTodoContainer = () => todoContainer;

  const addTodo = (todo) => {
    todoContainer.appendChild(todo);
  };

  const clean = () => {
    todoContainer.innerHTML = "";
  };

  return { getTodoContainer, addTodo, clean };
}

export { createTodoContainer };

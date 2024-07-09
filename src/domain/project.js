function Project() {
  let title = "";
  let description = "";
  let dueDate = "";
  let priority = 1;
  let isDone = false;

  let todos = [];

  const getTitle = () => title;

  const setTitle = (newTitle) => {
    if (newTitle === "") {
      throw new Error("Title cannot be empty");
    }
    title = newTitle;
  };

  const getDescription = () => description;

  const setDescription = (newDescription) => {
    if (newDescription === "") {
      throw new Error("Description cannot be empty");
    }
    description = newDescription;
  };

  const getDueDate = () => dueDate;

  const setDueDate = (newDueDate) => {
    if (newDueDate === "") {
      throw new Error("Due date cannot be empty");
    }
    dueDate = newDueDate;
  };

  const getPriority = () => priority;

  const setPriority = (newPriority) => {
    // priority is set betweein the rang of 1 - 10
    if (
      typeof newPriority !== "number" ||
      newPriority < 1 ||
      newPriority > 10
    ) {
      throw new Error(
        "Invalid priority value. Must be a number between 1 and 10",
      );
    }
    priority = newPriority;
  };

  const getIsDone = () => isDone;

  const setIsDone = (newIsDone) => {
    // done is a boolean
    if (typeof newIsDone !== "boolean") {
      throw new Error("isDone must be a boolean");
    }
    isDone = newIsDone;
  };

  const getTodos = () => todos;

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const removeTodo = (todo) => {
    todos = todos.filter((t) => t !== todo);
  };

  const getNotDoneTodos = () => {
    return todos.filter((todo) => !todo.getIsDone());
  };

  const getDoneTodos = () => {
    return todos.filter((todo) => todo.getIsDone());
  };

  return {
    setTitle,
    getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    setPriority,
    getPriority,
    setIsDone,
    getIsDone,
    getTodos,
    addTodo,
    removeTodo,
    getNotDoneTodos,
    getDoneTodos,
  };
}

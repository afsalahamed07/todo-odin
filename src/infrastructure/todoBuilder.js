import { Todo } from "../domain/todo";

function todoBuilder() {
  const todo = Todo();

  const setTitle = function (newTitle) {
    todo.setTitle(newTitle);
    return this;
  };

  const setDescription = function (newDescription) {
    todo.setDescription(newDescription);
    return this;
  };

  const setDueDate = function (newDueDate) {
    todo.setDueDate(newDueDate);
    return this;
  };

  const setPriority = function (newPriority) {
    todo.setPriority(newPriority);
    return this;
  };

  const setIsDone = function (newIsDone) {
    todo.setIsDone(newIsDone);
    return this;
  };

  const build = function () {
    return todo;
  };

  return {
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setIsDone,
    build,
  };
}

export { todoBuilder };

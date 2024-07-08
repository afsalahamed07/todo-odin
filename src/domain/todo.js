import { format } from "date-fns";

function Todo() {
  let title;
  let description;
  let dueDate = format(new Date(), "yyyy-MM-dd");
  let priority = 1;
  let isDone = false;

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
  };
}

export { Todo };

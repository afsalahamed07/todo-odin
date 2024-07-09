import { createToggle } from "./toggle.js";
import { format } from "date-fns";

/*
 * @param Todo todo
 * @return DOMElement
 */
function todoView(todo) {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "p-4",
    "rounded-lg",
    "shadow-md",
    "my-4",
    "mx-auto",
    "gap-2",
  );

  const titleDom = document.createElement("h2");
  titleDom.classList.add(
    "text-lg",
    "font-bold",
    "mb-2",
    "tracking-wide",
    "text-red-600",
  );
  titleDom.innerHTML = todo.getTitle();
  container.appendChild(titleDom);

  const descriptionDom = document.createElement("p");
  descriptionDom.classList.add("mb-2", "text-pretty", "grow");
  descriptionDom.innerHTML = todo.getDescription();
  container.appendChild(descriptionDom);

  const dateAndPriority = document.createElement("div");
  dateAndPriority.classList.add("flex", "flex-row", "justify-between", "mb-2");
  container.appendChild(dateAndPriority);

  const dueDateDom = document.createElement("p");
  dueDateDom.classList.add("text-gray-600", "mb-2", "text-sm");
  dueDateDom.innerHTML = `Due date: ${format(todo.getDueDate(), "dd/MM/yyyy")}`;
  dateAndPriority.appendChild(dueDateDom);

  const priorityDom = document.createElement("p");
  priorityDom.classList.add("text-gray-600", "mb-2", "text-sm");
  priorityDom.innerHTML = `Priority: ${todo.getPriority()}`;
  dateAndPriority.appendChild(priorityDom);

  const toggleDiv = document.createElement("div");
  toggleDiv.classList.add("flex", "flex-row", "flex-row-reverse", "mb-2");
  container.appendChild(toggleDiv);

  const toggle = createToggle();
  toggleDiv.appendChild(toggle.getToggle());

  toggle.getToggleInput().addEventListener("change", () => {
    todo.setIsDone(!todo.getIsDone());

    if (todo.getIsDone()) {
      titleDom.classList.add("line-through");
      descriptionDom.classList.add("line-through");
    } else {
      titleDom.classList.remove("line-through");
      descriptionDom.classList.remove("line-through");
    }
  });

  const render = () => {
    return container;
  };

  return {
    render,
  };
}

export { todoView };

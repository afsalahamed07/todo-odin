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
    "px-4",
    "rounded-lg",
    "shadow-md",
    "mx-auto",
    "w-2/3",
    "hover:cursor-pointer",
  );

  const titleDom = document.createElement("div");
  titleDom.classList.add("flex", "flex-row", "justify-between", "mb-2");
  container.appendChild(titleDom);

  const title = document.createElement("h2");
  title.classList.add(
    "text-lg",
    "font-bold",
    "mb-2",
    "tracking-wide",
    "text-red-600",
  );
  title.innerHTML = todo.getTitle();
  titleDom.appendChild(title);

  const toggleDiv = document.createElement("div");
  toggleDiv.classList.add("flex", "flex-row", "flex-row-reverse", "mb-2");
  titleDom.appendChild(toggleDiv);

  const toggle = createToggle();
  toggleDiv.appendChild(toggle.getToggle());

  const accordion = document.createElement("div");
  accordion.classList.add(
    "opacity-0",
    "h-0",
    "overflow-y-hidden",
    "transition-all",
    "duration-500",
    "ease-in-out",
  );
  container.appendChild(accordion);

  const descriptionDom = document.createElement("p");
  descriptionDom.classList.add("mb-2", "text-pretty", "grow");
  descriptionDom.innerHTML = todo.getDescription();
  accordion.appendChild(descriptionDom);

  const dateAndPriority = document.createElement("div");
  dateAndPriority.classList.add("flex", "flex-row", "justify-between", "mb-2", "overflow-hidden");
  accordion.appendChild(dateAndPriority);

  const dueDateDom = document.createElement("p");
  dueDateDom.classList.add("text-gray-600", "mb-2", "text-sm");
  dueDateDom.innerHTML = `Due date: ${format(todo.getDueDate(), "dd/MM/yyyy")}`;
  dateAndPriority.appendChild(dueDateDom);

  const priorityDom = document.createElement("p");
  priorityDom.classList.add("text-gray-600", "mb-2", "text-sm");
  priorityDom.innerHTML = `Priority: ${todo.getPriority()}`;
  dateAndPriority.appendChild(priorityDom);

  toggle.getToggleInput().addEventListener("change", () => {
    todo.setIsDone(!todo.getIsDone());

    if (todo.getIsDone()) {
      title.classList.add("line-through");
      descriptionDom.classList.add("line-through");
    } else {
      title.classList.remove("line-through");
      descriptionDom.classList.remove("line-through");
    }
  });

  container.addEventListener("mouseover", () => {
    accordion.classList.remove("opacity-0", "h-0");
  });

  container.addEventListener("mouseleave", () => {
    accordion.classList.add("opacity-0", "h-0");
  });

  const render = () => {
    return container;
  };

  return {
    render,
  };
}

export { todoView };

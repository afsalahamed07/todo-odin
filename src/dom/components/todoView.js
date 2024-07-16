import { createToggle } from "../toggle.js";
import { format } from "date-fns";

/*
 * @param Todo todo
 * @return DOMElement
 */
function todoView(todo) {
  const container = document.createElement("div");
  container.classList.add("todo");

  const accordion = document.createElement("div");
  accordion.classList.add("flex", "flex-row", "justify-between", "accordion");
  container.appendChild(accordion);

  const title = document.createElement("h2");
  title.classList.add("text-lg", "font-semibold", "tracking-wide");
  title.innerHTML = todo.getTitle();
  accordion.appendChild(title);

  const toggleDiv = document.createElement("div");
  toggleDiv.classList.add("flex", "flex-row", "flex-row-reverse");
  accordion.appendChild(toggleDiv);

  const toggle = createToggle();
  toggleDiv.appendChild(toggle.getToggle());

  const panel = document.createElement("div");
  panel.classList.add("panel");
  container.appendChild(panel);

  const descriptionDom = document.createElement("p");
  descriptionDom.classList.add("mb-2", "text-pretty", "grow");
  descriptionDom.innerHTML = todo.getDescription();
  panel.appendChild(descriptionDom);

  const dateAndPriority = document.createElement("div");
  dateAndPriority.classList.add("flex", "flex-row", "justify-between");
  panel.appendChild(dateAndPriority);

  const dueDateDom = document.createElement("p");
  dueDateDom.classList.add("text-gray-600", "text-base");
  dueDateDom.innerHTML = `Due date: ${format(todo.getDueDate(), "dd/MM/yyyy")}`;
  dateAndPriority.appendChild(dueDateDom);

  const priorityDom = document.createElement("p");
  priorityDom.classList.add("text-gray-600", "text-base");
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
    panel.style.maxHeight = panel.scrollHeight + "px";
  });

  container.addEventListener("mouseleave", () => {
    panel.style.maxHeight = null;
  });

  const render = () => {
    return container;
  };

  return {
    render,
  };
}

export { todoView };

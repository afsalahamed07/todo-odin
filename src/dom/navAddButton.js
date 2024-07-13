import { createTodoForm } from "./todoForm.js";

function createNavAddButton() {
  const navAdd = document.createElement("div");
  navAdd.classList.add(
    "m-auto",
    "px-4",
    "py-1",
    "border-2",
    "hover:shadow-sm",
    "rounded-md",
    "font-bold",
    "hover:cursor-pointer",
  );

  const navAddButton = document.createElement("button");
  navAddButton.id = "navAddButton";
  navAddButton.innerHTML = "Add";
  navAdd.appendChild(navAddButton);

  navAdd.addEventListener("click", () => {
    const todoForm = createTodoForm();

    todoForm.show();
  });

  const getNavAddButton = () => navAdd;
  return { getNavAddButton };
}

export { createNavAddButton };

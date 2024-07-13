function createTodoForm() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("p-4", "shadow-lg", "rounded-lg", "pb-8");
  const dialogContents = document.createElement("div");
  dialog.appendChild(dialogContents);

  dialogContents.classList.add(
    "w-96",
    "bg-white",
    "p-4",
    "flex",
    "flex-col",
    "gap-2",
  );

  const closeDiv = document.createElement("div");
  closeDiv.classList.add("flex", "justify-end");
  dialogContents.appendChild(closeDiv);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add(
    "rounded-full",
    "hover:text-red-600",
    "hover:cursor-pointer",
    "outline-none",
    "font-black",
  );
  closeBtn.innerHTML = "X";

  const form = document.createElement("form");
  form.id = "todoForm";
  form.className = "todo-form";
  dialogContents.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "todo-name");
  nameLabel.innerHTML = "Todo name";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "todo-name");
  nameInput.setAttribute("name", "todo-name");
  nameInput.setAttribute("required", "true");
  nameInput.classList.add("rounded-md", "p-2", "border-solid", "border-2");

  form.appendChild(nameInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "todo-description");
  descriptionLabel.innerHTML = "Todo description";
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "todo-description");
  descriptionInput.setAttribute("name", "todo-description");
  descriptionInput.classList.add(
    "rounded-md",
    "p-2",
    "border-solid",
    "border-2",
  );

  form.appendChild(descriptionInput);

  const submitButton = document.createElement("button");
  submitButton.classList.add(
    "bg-red-500",
    "text-white",
    "rounded-md",
    "p-2",
    "hover:bg-red-800",
  );

  submitButton.innerHTML = "Add Todo";
  form.appendChild(submitButton);

  const getTodoForm = () => dialog;

  const show = () => {
    document.body.appendChild(dialog);
    dialog.showModal();
  };

  return { getTodoForm, show };
}

export { createTodoForm };

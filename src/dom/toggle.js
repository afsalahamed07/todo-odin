function createToggle() {
  const label = document.createElement("label");
  label.classList.add("inline-flex", "items-center", "cursor-pointer");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("value", "");
  input.classList.add("sr-only", "peer");
  label.appendChild(input);

  const span = document.createElement("span");
  span.classList.add(
    "me-3",
    "text-sm",
    "font-medium",
    "text-gray-900",
    "dark:text-gray-300",
  );
  span.innerHTML = "Done";
  label.appendChild(span);

  const div = document.createElement("div");
  div.classList.add(
    "relative",
    "w-11",
    "h-6",
    "bg-gray-200",
    "peer-focus:outline-none",
    "rounded-full",
    "peer",
    "dark:bg-gray-700",
    "peer-checked:after:translate-x-full",
    "rtl:peer-checked:after:-translate-x-full",
    "peer-checked:after:border-white",
    "after:content-['']",
    "after:absolute",
    "after:top-[2px]",
    "after:start-[2px]",
    "after:bg-white",
    "after:border-gray-300",
    "after:border",
    "after:rounded-full",
    "after:h-5",
    "after:w-5",
    "after:transition-all",
    "dark:border-gray-600",
    "peer-checked:bg-blue-600",
  );
  label.appendChild(div);


  const getToggle = () => label;
  const getToggleInput = () => input;

  return {getToggle, getToggleInput};
}

export { createToggle };

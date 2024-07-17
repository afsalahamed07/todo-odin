function createToggle() {
  const label = document.createElement("label");
  label.classList.add("toggle");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("value", "");
  input.classList.add("sr-only", "peer");
  label.appendChild(input);

  const div = document.createElement("div");
  div.classList.add(
    "peer",
    "peer-checked:after:translate-x-full",
    "rtl:peer-checked:after:-translate-x-full",
    "peer-checked:after:border-white",
    "peer-checked:bg-blue-600",
  );
  label.appendChild(div);

  const getToggle = () => label;
  const getToggleInput = () => input;

  return { getToggle, getToggleInput };
}

export { createToggle };

import { createInput } from "./input.js";
import { createLabel } from "./label.js";

function createInputPair(labelText, required = false, placeholder = "") {
  const inputPair = document.createElement("div");
  inputPair.classList.add("input-pair");

  const input = createInput(required, placeholder);
  const label = createLabel(labelText);

  inputPair.appendChild(label.getLabel());
  inputPair.appendChild(input.getInput());

  const getPair = () => inputPair;

  return Object.assign(input, label, { getPair });
}
export { createInputPair };

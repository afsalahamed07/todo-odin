function createInput(required = false, placeholder = "") {
  const iput = document.createElement("input");
  iput.classList.add("input");

  iput.required = required;
  iput.placeholder = placeholder;

  const getInput = () => iput;

  const getValue = () => iput.value;

  return { getInput, getValue };
}

export { createInput };

function createLabel(textContent) {
  const label = document.createElement("label");
  label.classList.add("label");
  label.textContent = textContent;

  const getLabel = () => label;

  return { getLabel };
}

export { createLabel };

import { createButton } from "./button";

function createSubmitButton() {
  const submitButton = createButton("", "Submit");
  submitButton.setClass(["submit-btn"]);

  return Object.assign(submitButton, {});
}

export { createSubmitButton };

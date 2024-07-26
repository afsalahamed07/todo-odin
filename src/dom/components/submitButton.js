import { createButton } from "./button";

function createSubmitButton() {
  const onClick = () => {
    const form = document.getElementById("form");
    form.submit();
  }

  const submitButton = createButton("Submit", "Submit", onClick);

  const getButton = () => submitButton;


  return Object.assign(submitButton, {getButton});
}

function createButton(icon, text) {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button");

  const iconDiv = document.createElement("div");
  iconDiv.innerHTML = icon;
  buttonDiv.appendChild(iconDiv);

  const button = document.createElement("button");
  button.innerText = text;
  buttonDiv.appendChild(button);

  let onClick = () => {
    console.log("Onclick not implemented yet.");
  };

  buttonDiv.addEventListener("click", () => {
    onClick();
  });

  const setOnClick = (newOnClick) => {
    onClick = newOnClick;
  };

  const getButton = () => buttonDiv;

  const setClass = (sclass) => {
    sclass.forEach((c) => {
      buttonDiv.classList.add(c);
    });
  };

  return { getButton, setOnClick, setClass };
}

export { createButton };

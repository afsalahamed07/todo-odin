function createButton(icon, text, onClick) {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button");

  const iconDiv = document.createElement("div");
  iconDiv.innerHTML = icon;
  buttonDiv.appendChild(iconDiv);

  const button = document.createElement("button");
  button.innerText = text;
  buttonDiv.appendChild(button);

  button.addEventListener("click", onClick);


  return buttonDiv;
}

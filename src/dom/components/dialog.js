function createDialog() {
  const dialog = document.createElement("dialog");
  dialog.className = "dialog";

  // dialog header
  const dialogHeader = document.createElement("div");
  dialogHeader.className = "dialog-header";
  dialog.appendChild(dialogHeader);

  const dialogTitle = document.createElement("h2");
  dialogTitle.className = "dialog-title";
  dialogTitle.innerHTML = "Dialog Title";
  dialogHeader.appendChild(dialogTitle);

  // close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "X";
  dialogHeader.appendChild(closeBtn);

  // dialog contents
  const body = document.createElement("div");
  body.className = "dialog-body";
  dialog.appendChild(body);

  const close = () => {
    // remove dialog from body
    dialog.remove();
    dialog.close();
  };

  const open = () => {
    document.body.appendChild(dialog);
    dialog.showModal();
  };

  const setTitle = (title) => {
    dialogTitle.innerHTML = title;
  };

  const addToDialog = (element) => {
    body.appendChild(element);
  };

  const getDialog = () => dialog;

  closeBtn.addEventListener("click", close);
  return { setTitle, open, close, addToDialog, getDialog };
}

export { createDialog };

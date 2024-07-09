function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add(
    "bg-gradient-to-r",
    "from-rose-100",
    "to-rose-50",
    "rounded-md",
    "p-4",
    "flex",
    "flex-col",
    "h-screen",
    "basis-1/6",
    "flex-none",
  );

  const title = document.createElement("h1");
  title.classList.add(
    "mt-2",
    "text-2xl",
    "font-black",
    "tracking-wide",
    "text-red-700",
  );
  title.innerHTML = "Todo App";
  sidebar.appendChild(title);

  const getSiderbar = () => sidebar;

  return { getSiderbar };
}

export { createSidebar };

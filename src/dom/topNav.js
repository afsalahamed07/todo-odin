function topNavigation() {
  const topNav = document.createElement("div");

  topNav.classList.add(
    "flex",
    "flex-row",
    "justify-center",
    "h-16",
    "flex-none",
    "sticky",
  );

  const addBtn = (btn) => {
    topNav.appendChild(btn);
  };

  const getTopNav = () => topNav;

  return { getTopNav, addBtn };
}

export { topNavigation };

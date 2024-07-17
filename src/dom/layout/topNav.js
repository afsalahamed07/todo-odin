function topNavigation() {
  const topNav = document.createElement("div");

  topNav.classList.add("top-nav-bar");

  const addBtn = (btn) => {
    topNav.appendChild(btn);
  };

  const getTopNav = () => topNav;

  return { getTopNav, addBtn };
}

export { topNavigation };

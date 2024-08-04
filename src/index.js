import "./style.css";
import { createSidebar } from "./dom/layout/sidebar";
import { createProjectButton } from "./dom/layout/projectNav";
import { createTodoContainer } from "./dom/layout/todoContainer";
import { createProjectAddButton } from "./dom/components/addButton";
import { topNavigation } from "./dom/layout/topNav.js";
import { todoAddButton } from "./dom/components/navAddButton.js";
import { environment } from "./environment.js";
import { project, project2 } from "./sampleData.js";
import { Todo } from "./domain/todo.js";

// this environment should be loaded from localStorage
const todoContainer = createTodoContainer();
const env = environment(todoContainer);

const body = document.querySelector("body");

const sidebar = createSidebar();
body.appendChild(sidebar.getSiderbar());

const rightContainer = document.createElement("div");
rightContainer.classList.add("right-container");
body.appendChild(rightContainer);

const topNav = topNavigation();
rightContainer.appendChild(topNav.getTopNav());

const navAddButton = todoAddButton(env);
topNav.addBtn(navAddButton.getButton());

rightContainer.appendChild(todoContainer.getTodoContainer());

const projectNav = createProjectButton(project, todoContainer, env);
sidebar.appendProject(projectNav);

const projectNav2 = createProjectButton(project2, todoContainer, env);
sidebar.appendProject(projectNav2);

const addBtn = createProjectAddButton(sidebar, todoContainer);
sidebar.getSiderbar().appendChild(addBtn.getButton());

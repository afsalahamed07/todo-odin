import "./style.css";
import { Todo } from "./domain/todo";
import { createSidebar } from "./dom/layout/sidebar";
import { Project } from "./domain/project";
import { createProjectButton } from "./dom/layout/projectNav";
import { createTodoContainer } from "./dom/layout/todoContainer";
import { createProjectAddButton } from "./dom/components/addButton";
import { topNavigation } from "./dom/layout/topNav.js";
import { todoAddButton } from "./dom/components/navAddButton.js";
import { environment } from "./environment.js";

// this environment should be loaded from localStorage
const env = environment();

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

const todoContainer = createTodoContainer();
rightContainer.appendChild(todoContainer.getTodoContainer());

const todo = Todo();
todo.setTitle("My first todo");
todo.setDescription(
  "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
);
todo.setDueDate(new Date());
todo.setPriority(1);
todo.setIsDone(false);

const todo2 = Todo();
todo2.setTitle("My first todo");
todo2.setDescription(
  "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
);
todo2.setDueDate(new Date());
todo2.setPriority(1);
todo2.setIsDone(false);

const todo3 = Todo();
todo3.setTitle("My first todo");
todo3.setDescription(
  "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
);
todo3.setDueDate(new Date());
todo3.setPriority(1);
todo3.setIsDone(false);

const todo4 = Todo();
todo4.setTitle("My first todo");
todo4.setDescription(
  "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
);
todo4.setDueDate(new Date());
todo4.setPriority(1);
todo4.setIsDone(false);

const project = Project();
project.setTitle("My first project");

project.addTodo(todo);
project.addTodo(todo2);
project.addTodo(todo3);

const projectNav = createProjectButton(project, todoContainer, env);
sidebar.appendProject(projectNav);

const project2 = Project();
project2.addTodo(todo4);
project2.setTitle("My first project2");

env.setCurrentProject(project2);

const projectNav2 = createProjectButton(project2, todoContainer, env);
sidebar.appendProject(projectNav2);

const addBtn = createProjectAddButton(sidebar, todoContainer);
sidebar.getSiderbar().appendChild(addBtn.getButton());

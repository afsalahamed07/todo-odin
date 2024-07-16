import "./style.css";
import { todoBuilder } from "./infrastructure/todoBuilder";
import { createSidebar } from "./dom/layout/sidebar";
import { Project } from "./domain/project";
import { ProjectNavigation } from "./dom/layout/projectNav";
import { createTodoContainer } from "./dom/todoContainer";
import { createProjectAddButton } from "./dom/components/addButton";
import { topNavigation } from "./dom/topNav.js";
import { createNavAddButton } from "./dom/navAddButton.js";

const body = document.querySelector("body");
body.classList.add(
  "py-2",
  "flex",
  "flex-row",
  "font-dosis",
  "tracking-wide",
  "h-screen"
);

const sidebar = createSidebar();
body.appendChild(sidebar.getSiderbar());

const rightContainer = document.createElement("div");
rightContainer.classList.add("flex", "flex-col", "grow");
body.appendChild(rightContainer);

const topNav = topNavigation();
rightContainer.appendChild(topNav.getTopNav());

const navAddButton = createNavAddButton();
topNav.addBtn(navAddButton.getNavAddButton());




const todoContainer = createTodoContainer();
rightContainer.appendChild(todoContainer.getTodoContainer());

const todo = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const todo2 = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const todo3 = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const todo4 = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const project = Project();
project.setTitle("My first project");

project.addTodo(todo);
project.addTodo(todo2);
project.addTodo(todo3);

const projectNav = ProjectNavigation(project, todoContainer);
sidebar.appendProject(projectNav);

const project2 = Project();
project2.addTodo(todo4);
project2.setTitle("My first project2");

const projectNav2 = ProjectNavigation(project2, todoContainer);
sidebar.appendProject(projectNav2);

const addBtn = createProjectAddButton(sidebar, todoContainer);
sidebar.getSiderbar().appendChild(addBtn.getButton());

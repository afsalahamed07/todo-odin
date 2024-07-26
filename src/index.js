import "./style.css";
import { Todo } from "./domain/todo";
import { createSidebar } from "./dom/layout/sidebar";
import { Project } from "./domain/project";
import { ProjectNavigation } from "./dom/layout/projectNav";
import { createTodoContainer } from "./dom/layout/todoContainer";
import { createProjectAddButton } from "./dom/components/addButton";
import { topNavigation } from "./dom/layout/topNav.js";
import { createNavAddButton } from "./dom/components/navAddButton.js";

const body = document.querySelector("body");
body.classList.add(
  "py-2",
  "flex",
  "flex-row",
  "font-dosis",
  "tracking-wide",
  "h-screen",
);

const sidebar = createSidebar();
body.appendChild(sidebar.getSiderbar());

const rightContainer = document.createElement("div");
rightContainer.classList.add("flex", "flex-col", "grow");
body.appendChild(rightContainer);

const topNav = topNavigation();
rightContainer.appendChild(topNav.getTopNav());

const navAddButton = createNavAddButton();
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

const todo3 = Todo()
  todo3.setTitle("My first todo")
  todo3.setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  todo3.setDueDate(new Date())
  todo3.setPriority(1)
  todo3.setIsDone(false)

const todo4 = Todo()
  todo4.setTitle("My first todo")
  todo4.setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  todo4.setDueDate(new Date())
  todo4.setPriority(1)
  todo4.setIsDone(false)

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

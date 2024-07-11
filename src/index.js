import "./style.css";
import { todoBuilder } from "./infrastructure/todoBuilder";
import { todoView } from "./dom/todoView";
import { createSidebar } from "./dom/sidebar";
import { Project } from "./domain/project";
import { ProjectNavigation } from "./dom/projectNav";
import { createTodoContainer } from "./dom/todoContainer";
import { AddButton } from "./dom/addButton";

const body = document.querySelector("body");
body.classList.add(
  "flex",
  "flex-row",
  "font-dosis",
  "text-lg",
  "tracking-wide",
  "gap-4",
);

const sidebar = createSidebar();
body.appendChild(sidebar.getSiderbar());

const todoContainer = createTodoContainer();
body.appendChild(todoContainer.getTodoContainer());

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

const addBtn = AddButton(sidebar, todoContainer);
sidebar.getSiderbar().appendChild(addBtn.getButton());

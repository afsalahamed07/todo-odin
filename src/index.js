import "./style.css";
import { todoBuilder } from "./infrastructure/todoBuilder";
import { todoView } from "./dom/todoView";

const body = document.querySelector("body");
body.classList.add(
  "container",
  "mx-auto",
  "p-4",
  "flex",
  "flex-col",
  "font-mono",
);

const todoContainer = document.createElement("div");
todoContainer.classList.add(
  "grid",
  "grid-cols-3",
  "gap-4",
);
body.appendChild(todoContainer);

const todo = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();


const todoDom = todoView(todo).render();

todoContainer.appendChild(todoDom);

const todo2 = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const todoDom2 = todoView(todo2).render();
todoContainer.appendChild(todoDom2);

const todo3 = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const todoDom3 = todoView(todo3).render();
todoContainer.appendChild(todoDom3);

const todo4 = todoBuilder()
  .setTitle("My first todo")
  .setDescription(
    "This is a description, it can be long or short. It's up to you!, but it's better to be long so you can see how it looks like.",
  )
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

const todoDom4 = todoView(todo4).render();
todoContainer.appendChild(todoDom4);

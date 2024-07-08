import "./style.css";
import { todoBuilder } from "./infrastructure/todoBuilder";

const todo = todoBuilder()
  .setTitle("My first todo")
  .setDescription("This is a description")
  .setDueDate(new Date())
  .setPriority(1)
  .setIsDone(false)
  .build();

console.log(todo);

console.log(todo.getTitle());

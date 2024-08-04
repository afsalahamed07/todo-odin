import { Todo } from "./domain/todo";
import { Project } from "./domain/project";

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

const project2 = Project();
project2.addTodo(todo4);
project2.setTitle("My first project2");

export { project, project2 };

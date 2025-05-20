import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.type';

@Injectable()
export class ToDoService {
  private todos: Todo[];
  constructor() {
    this.todos = [];
  }

  addToDo(todo: Todo): string {
    this.todos.push(todo);
    return 'todo added successfully';
  }

  getAllTodos() {
    return this.todos;
  }

  getToDoById(id: number): Todo | string {
    if (id > this.todos.length || id <= 0) {
        throw new NotFoundException("todo doesn't exist !");
    }
    return this.todos[id - 1];
  }

  editToDo(todo: Todo, id: number): Todo | string {
    // todo --> adding a new object to the objects
    // {...todo} --> replacing the deleted object w/ this
    this.todos.splice(id, 1, {...todo});
    console.log("this.todos: ",this.todos);
    return 'todo updated successfully';
  }

  delToDo(id: number): string {
    if (id > this.todos.length || id <= 0) {
        throw new HttpException("todo doesn't exist !", HttpStatus.NOT_FOUND);
    }
    this.todos.splice(id, 1);
    return 'todo deleted successfully';
  }
}

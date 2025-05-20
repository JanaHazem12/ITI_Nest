import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ToDoService } from './todo.service';
import { Todo } from './todo.type';

@Controller('todo')
export class ToDoController {
  constructor(private todoService: ToDoService) {}
  @Get()
  getAll(): Todo[] {
    return this.todoService.getAllTodos()
  }

  @Get(':id')
  getToDoById(@Param('id') id: number) {
    // + to convert to number
    return this.todoService.getToDoById(+id);
  }

  @Post()
  createToDo(@Body() todo: Todo) {
    return this.todoService.addToDo(todo);
  }

  @Put(':id')
  editToDo(@Body() todo: Todo,@Param('id') id: number) {
    return this.todoService.editToDo(todo,+id);
  }

  @Delete(':id')
  delToDo(@Param('id') id: number) {
    // + to convert to number
    return this.todoService.delToDo(+id);
  }
}

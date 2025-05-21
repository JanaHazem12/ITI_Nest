import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './todo.schema';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(@InjectModel('ToDo') private todoModel: Model<ToDo>) {}
  create(createTodoDto: CreateTodoDto) {
    const { task, status } = createTodoDto;
    const todo = new this.todoModel({
      task,
      status,
    });
    return todo.save();
  }

  findAll() {
    return this.todoModel.find().exec();
  }

  async findOne(id: string) {
    const findbyId = await this.todoModel.findById(id).exec();
    if(!findbyId){
      throw new NotFoundException('Todo not found');
    }
    console.log("FIND BY ID:",findbyId);
    return findbyId
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const { task, status } = updateTodoDto;
    const todo = await this.todoModel.findByIdAndUpdate(id, {
      task,
      status,
    },{new: true});
    console.log("TODO:",todo);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }

  async remove(id: string) {
    const todo = await this.todoModel.findByIdAndDelete(id);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }
}

import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { ToDo,ToDoSchema } from './todo.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports : [MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Status } from './dto/create-todo.dto';

export type ToDoDocument = HydratedDocument<ToDo>;


@Schema()
export class ToDo {
  @Prop()
  task: string;

  // status is an enum
  @Prop({
    type: String,
    enum: Status,
    default: Status.pending,
  })
  status: Status;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);

import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsString, MaxLength, MinLength } from "class-validator";

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    task: string
}

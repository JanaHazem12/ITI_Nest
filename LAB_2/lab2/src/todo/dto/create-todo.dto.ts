import { IsEnum, IsString, MaxLength, MinLength } from "class-validator";


export enum Status {
    pending = 'pending',
    in_progress = 'in_progress',
    done = 'done',
}
export class CreateTodoDto {
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    task: string
    @IsEnum(Status)
    status: Status;
}

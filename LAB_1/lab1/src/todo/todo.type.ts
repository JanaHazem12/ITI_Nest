enum Status {
    Todo = 'todo',
    InProgress = 'in-progress',
    Done = 'done'
}
export class Todo {
    id: number;
    task: string;
    status: Status
}
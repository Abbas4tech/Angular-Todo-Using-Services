import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  todos: { id: number; title: string }[] = [];

  addTodo(todoData: { id: number; title: string }) {
    const existedTodo = this.todos.find((todo: any) => todo.id === todoData.id);
    if (!existedTodo) this.todos.push(todoData);
    console.log(todoData, this.todos);
  }

  getTodos() {
    return this.todos;
  }

  constructor() {}
}

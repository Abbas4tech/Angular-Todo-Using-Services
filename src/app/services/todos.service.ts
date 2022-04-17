import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: { id: number; title: string }[] = [
    { id: Math.random(), title: 'Take a Bath' },
  ];

  numberOfTodos: number = 1;

  editTodo!: any;

  addTodo(todoData: { id: number; title: string }) {
    console.log(this.editTodo);
    if (this.editTodo) {
      this.todos.splice(this.todos.indexOf(this.editTodo), 1, todoData);
      this.editTodo = null;
    } else {
      this.todos.push(todoData);
      this.numberOfTodos++;
    }
    console.log(todoData, this.todos);
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo: any) => todo.id !== todoId);
    this.numberOfTodos--;
  }

  getTodos() {
    return this.todos;
  }

  sendEditTodoData(todoToBeEdit: { id: number; title: string }) {
    this.editTodo = todoToBeEdit;
  }

  resetEditData() {
    this.editTodo = null;
  }

  getEditTodoData() {
    return this.editTodo;
  }

  constructor() {}
}

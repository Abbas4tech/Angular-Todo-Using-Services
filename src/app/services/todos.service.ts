import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: { id: number; title: string }[] = [
    { id: Math.random(), title: 'Take a Bath' },
  ];

  editTodo!: any;

  addTodo(todoData: { id: number; title: string }) {
    const existedTodo = this.todos.find((todo: any) => todo.id === todoData.id);
    if (!existedTodo) this.todos.push(todoData);
    console.log(todoData, this.todos);
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo: any) => todo.id !== todoId);
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

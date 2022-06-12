import { todo } from './../model/app.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: todo[] = [{ id: Math.random(), title: 'Take a Bath' }];

  numberOfTodos: number = 1;

  editTodo!: todo | null;

  addTodo(todoData: todo) {
    console.log(this.editTodo);
    if (this.editTodo) {
      this.todos.splice(this.todos.indexOf(this.editTodo), 1, todoData);
      this.resetEditData();
    } else {
      this.todos.push(todoData);
      this.numberOfTodos++;
    }
    console.log(todoData, this.todos);
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo: todo) => todo.id !== todoId);
    this.numberOfTodos--;
  }

  getTodos() {
    return this.todos;
  }

  sendEditTodoData(todoToBeEdit: todo) {
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

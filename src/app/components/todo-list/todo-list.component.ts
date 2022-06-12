import { Component, DoCheck } from '@angular/core';
import { todo } from 'src/app/model/app.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  template: `<ul id="todos" class="mt-4 w-full" *ngFor="let todo of todoList">
    <app-todo-item [todo]="todo"></app-todo-item>
  </ul>`,
})
export class TodoListComponent implements DoCheck {
  todoList!: todo[];

  constructor(private todoService: TodosService) {}

  ngDoCheck(): void {
    this.todoList = this.todoService.getTodos();
  }
}

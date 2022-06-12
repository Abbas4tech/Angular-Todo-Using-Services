import { Component, DoCheck } from '@angular/core';
import { todo } from 'src/app/model/app.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements DoCheck {
  todoList!: todo[];

  constructor(private todoService: TodosService) {}

  ngDoCheck(): void {
    this.todoList = this.todoService.getTodos();
  }
}

import { Component, DoCheck } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements DoCheck {

  todoList!: { id: number; title: string }[];

  constructor(private todoService: TodosService) {}

  ngDoCheck(): void {
    this.todoList = this.todoService.getTodos();
    console.log(this.todoList);
  }
}

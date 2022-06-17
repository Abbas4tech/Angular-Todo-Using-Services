import { Component, DoCheck } from '@angular/core';
import { todo } from 'src/app/model/app.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <section id="todolist" class="flex flex-col max-w-2xl mx-auto w-[90%]">
      <input
        *ngIf="todoList.length"
        type="search"
        class="p-2 mt-4 bg-purple-100 border-purple-600 border-2 rounded-md"
        placeholder="Search by name"
        [(ngModel)]="searchKeyword"
      />

      <ul
        id="todos"
        class="mt-4 w-full"
        *ngFor="let todo of todoList | filter: searchKeyword"
      >
        <app-todo-item
          (clearSearch)="clearSearch($event)"
          [todo]="todo"
        ></app-todo-item>
      </ul>
    </section>
  `,
})
export class TodoListComponent implements DoCheck {
  todoList!: todo[];

  searchKeyword!: string;

  constructor(private todoService: TodosService) {}

  ngDoCheck(): void {
    this.todoList = this.todoService.getTodos();
  }
  clearSearch(e: string) {
    if (this.searchKeyword) this.searchKeyword = e;
  }
}

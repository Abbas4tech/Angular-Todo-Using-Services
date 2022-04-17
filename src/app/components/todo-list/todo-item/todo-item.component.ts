import { TodosService } from 'src/app/services/todos.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: { id: number; title: string };

  constructor(
    private todoService: TodosService,
    private formService: FormService
  ) {}

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  onEditTodo(todoToBeEdit: { id: number; title: string }) {
    this.formService.openForm();
    this.todoService.sendEditTodoData(todoToBeEdit);
  }

  ngOnInit(): void {}
}

import { TodosService } from 'src/app/services/todos.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { todo } from 'src/app/model/app.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: todo;

  constructor(
    private todoService: TodosService,
    private formService: FormService
  ) {}

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  onEditTodo(todoToBeEdit: todo) {
    this.formService.openForm();
    this.todoService.sendEditTodoData(todoToBeEdit);
  }

  ngOnInit(): void {}
}

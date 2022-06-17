import { TodosService } from 'src/app/services/todos.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { todo } from 'src/app/model/app.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: todo;
  @Output() clearSearch = new EventEmitter();

  constructor(
    private todoService: TodosService,
    private formService: FormService
  ) {}

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.clearSearch.emit('');
  }

  onEditTodo(todoToBeEdit: todo) {
    this.formService.formState.emit(true);
    this.todoService.sendEditTodoData(todoToBeEdit);
    this.clearSearch.emit('');
  }

  ngOnInit(): void {}
}

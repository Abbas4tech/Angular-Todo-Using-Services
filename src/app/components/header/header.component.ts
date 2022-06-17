import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements DoCheck, OnDestroy, OnInit {
  formState = false;

  numberOfTodos!: number;

  constructor(
    private formService: FormService,
    private todoService: TodosService
  ) {}

  onPressAdd() {
    this.formService.formState.emit(true);
  }
  ngDoCheck(): void {
    this.numberOfTodos = this.todoService.numberOfTodos;
  }
  ngOnInit(): void {
    this.formService.formState.subscribe((v) => (this.formState = v));
  }
  ngOnDestroy(): void {
    this.formService.formState.unsubscribe();
  }
}

import { Component, DoCheck } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements DoCheck {
  formState!: boolean;

  numberOfTodos!: number;

  constructor(
    private formService: FormService,
    private todoService: TodosService
  ) {}

  onPressAdd() {
    this.formService.openForm();
  }
  ngDoCheck(): void {
    this.formState = this.formService.formIsOpen;
    this.numberOfTodos = this.todoService.numberOfTodos;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls:["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(
    private formService: FormService,
    private todoService: TodosService
  ) {}

  editTodoData!: { id: number; title: string };

  AddTodo!: FormGroup;

  ngOnInit(): void {
    this.editTodoData = this.todoService.getEditTodoData();
    console.log(this.editTodoData);
    this.AddTodo = new FormGroup({
      title: new FormControl(
        this.editTodoData ? this.editTodoData.title : null,
        [Validators.required]
      ),
    });
  }

  onCancelForm() {
    this.formService.closeForm();
    this.todoService.resetEditData();
  }

  onSubmitForm() {
    this.AddTodo.value.id = Math.random();
    this.formService.closeForm();
    this.todoService.addTodo(this.AddTodo.value);
    if (this.editTodoData) this.todoService.resetEditData();
  }
}

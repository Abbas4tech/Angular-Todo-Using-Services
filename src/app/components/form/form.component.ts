import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  constructor(private formService: FormService) {}

  AddTodo!: FormGroup;

  ngOnInit(): void {
    this.AddTodo = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }

  onCancelForm() {
    this.formService.closeForm();
  }

  onSubmitForm() {
    this.AddTodo.value.id = Math.random();
    console.log(this.AddTodo.value);
    this.formService.closeForm();
  }
}

import { Component, OnInit, DoCheck } from '@angular/core';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {

  constructor(private formService: FormService) {}

  formState!: boolean;

  title = 'todo';

  ngDoCheck(): void {
    this.formState = this.formService.formIsOpen;
    console.log(this.formState);
  }

  ngOnInit(): void {
    console.log(this.formState);
  }
}

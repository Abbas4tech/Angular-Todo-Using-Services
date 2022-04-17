import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  
  formIsOpen = false;

  constructor() {}

  openForm() {
    this.formIsOpen = true;
  }

  closeForm() {
    this.formIsOpen = false;
  }
}

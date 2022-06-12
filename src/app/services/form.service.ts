import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formIsOpen = false;

  constructor() {}

  openForm(): void {
    this.formIsOpen = true;
  }

  closeForm(): void {
    this.formIsOpen = false;
  }
}

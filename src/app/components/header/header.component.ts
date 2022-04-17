import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private formService: FormService) {}

  onPressAdd() {
    this.formService.openForm();
    console.log(this.formService);
  }

  ngOnInit(): void {}
}

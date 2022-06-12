import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<app-backdrop></app-backdrop>
    <section
      class="z-20 w-[90%] max-w-2xl rounded-md p-4 bg-white absolute top-20 left-1/2 -translate-x-1/2"
    >
      <ng-content></ng-content>
    </section> `,
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  template: `<section
    class="h-screen w-full z-10 bg-black/75 fixed top-0 left-0"
  ></section> `,
})
export class BackdropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, VERSION, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<button [disabled]=disabled>My button</button>`,
  styles: [``],
})
export class MyButtonComponent {
  @Input()
  disabled = false;
}

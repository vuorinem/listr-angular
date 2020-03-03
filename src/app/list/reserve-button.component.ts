import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reserve-button',
  templateUrl: './reserve-button.component.html'
})
export class ReserveButtonComponent {
  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit();
  }
}

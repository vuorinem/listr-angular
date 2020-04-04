import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html'
})
export class CancelButtonComponent {
  @Output() cancel = new EventEmitter<void>();

  handleClick() {
    this.cancel.emit();
  }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {
  @Input() label = '';

  @Output() reserve = new EventEmitter<string>();

  handleReserve() {
    this.reserve.emit(this.label);
  }
}

import { ItemData } from './list-api';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {
  @Input() item!: ItemData;

  @Output() reserve = new EventEmitter<ItemData>();
  @Output() cancel = new EventEmitter<ItemData>();

  handleReserve() {
    this.reserve.emit(this.item);
  }

  handleCancel() {
    this.cancel.emit(this.item);
  }
}

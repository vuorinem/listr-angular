import { ListData, getList, ItemData } from './list-api';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnChanges {
  @Input() name = '';

  list: ListData;

  async ngOnChanges() {
    this.list = await getList(this.name);
  }

  handleReserve(item: ItemData) {
    alert(`Reserved '${item.label}'`);
  }

  handleCancel(item: ItemData) {
    alert(`Cancelled '${item.label}'`);
  }
}

import { ListData, getList, ItemData, reserve, cancel, subscribe, Unsubscribe } from './list-api';
import { Component, Input, OnChanges, NgZone } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnChanges {
  @Input() name = '';

  list: ListData;
  unsubscribe: Unsubscribe | null = null;

  constructor(private ngZone: NgZone) {}

  async ngOnChanges() {
    await this.initList();
  }

  async initList() {
    await this.loadList();

    if (this.unsubscribe !== null) {
      this.unsubscribe();
    }

    this.unsubscribe = subscribe(this.name, async () => {
      this.ngZone.run(async () => {
        await this.loadList();
      });
    });
  }

  async loadList() {
    this.list = await getList(this.name);
  }

  async handleReserve(item: ItemData) {
    if (!this.list) {
      return;
    }

    await reserve(this.list.name, item.label);
  }

  async handleCancel(item: ItemData) {
    if (!this.list) {
      return;
    }

    await cancel(this.list.name, item.label);
  }
}

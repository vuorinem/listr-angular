import { Component, Input } from '@angular/core';

const TestItems = [
  'First item',
  'Second item',
  'Third item',
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() name = '';

  items = TestItems;
}

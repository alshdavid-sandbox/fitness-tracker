import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-item',
  templateUrl: './date-item.component.html',
  styleUrls: ['./date-item.component.scss']
})
export class DateItemComponent {
    @Input() date
}

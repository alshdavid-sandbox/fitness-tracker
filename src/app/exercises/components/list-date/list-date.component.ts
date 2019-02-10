import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-list-date',
  templateUrl: './list-date.component.html',
  styleUrls: ['./list-date.component.scss']
})
export class ListDateComponent {
  @Input()
  public date: string
}

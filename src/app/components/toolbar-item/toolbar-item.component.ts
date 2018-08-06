import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.scss']
})
export class ToolbarItemComponent {
  @Input() icon = ''
  @Input() text = ''
}

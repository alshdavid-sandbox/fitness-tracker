import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @HostBinding('class')
  @Input()
  public theme: string
}

import { Component, Input, HostBinding, ChangeDetectionStrategy, OnChanges } from '@angular/core'

@Component({
  selector: 'app-icon',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {
  @HostBinding('class')
  public classList: string

  @Input()
  public type = 'fas'

  @Input()
  public src: string

  ngOnChanges() {
    this.classList = `${this.type} fa-${this.src}`
  }
}

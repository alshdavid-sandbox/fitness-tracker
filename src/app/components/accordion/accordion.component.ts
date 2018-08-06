import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
    @Input() value
    @Input() label
    @Input() open = false
    @Output() clickTitle = new EventEmitter()

    toggle() { 
      this.clickTitle.emit()
    }
}

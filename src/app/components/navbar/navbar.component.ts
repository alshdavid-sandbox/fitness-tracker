import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() left = ''
  @Input() right = ''
  @Input() center = ''
}

const commonStyles = `
  :host {
    display: block;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    padding: 0 3%;
  }
`

@Component({
  selector: 'app-navbar-left',
  template: '<ng-content></ng-content>',
  styles: [
    commonStyles, 
    `
      :host {
        text-align: left;
        right: 50%;
      }
    `
  ]
})
export class NavbarLeftComponent {}

@Component({
  selector: 'app-navbar-right',
  template: '<ng-content></ng-content>',
  styles: [
    commonStyles, 
    `
      :host {
        text-align: right;
        left: 50%;
      }
    `
  ]
})
export class NavbarRightComponent {}

@Component({
  selector: 'app-navbar-center',
  template: '<ng-content></ng-content>',
  styles: [
    commonStyles, 
    `
      :host {
        z-index: 1;
      }
    `
  ]
})
export class NavbarCenterComponent {}

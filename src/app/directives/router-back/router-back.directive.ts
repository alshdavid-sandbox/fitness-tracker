import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[routerBack]'
})
export class RouterBackDirective {
    constructor(
        private ngLocation: Location
    ) {}

    @HostListener('click', ['$event'])
    onClick(event) {
        this.ngLocation.back();
    }
}
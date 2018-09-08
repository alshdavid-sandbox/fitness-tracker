import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[autogrow]'
})
export class AutoGrowDirective {

    constructor(
        private ngEl: ElementRef
    ) {}

    ngOnInit() {
        this.resize(this.ngEl.nativeElement)
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event) {
        this.resize(event.target)
    }

    resize(el:any) {
        el.style.height = 'auto'
        el.style.height = `${el.scrollHeight + 20}px`
    }
}
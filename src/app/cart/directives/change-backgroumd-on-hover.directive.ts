import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[bsChangeBackgroumdOnHover]',
})
export class ChangeBackgroumdOnHoverDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.setBackground('green');
        console.log('mouseenter');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBackground('transparent');
    }

    private setBackground(value: string) {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', value);
    }
}

import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bsChangeFontByClick]',
})
export class ChangeFontByClickDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') onClick() {
        this.setFontSize();
    }

    private setFontSize() {
        this.renderer.setStyle(this.element.nativeElement, 'font-size', '16px');
        this.renderer.setStyle(this.element.nativeElement, 'border', '1px red solid');
    }
}

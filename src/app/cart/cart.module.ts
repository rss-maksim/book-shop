import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBackgroumdOnHoverDirective } from './directives/change-backgroumd-on-hover.directive';

@NgModule({
    declarations: [ChangeBackgroumdOnHoverDirective],
    imports: [CommonModule],
    exports: [ChangeBackgroumdOnHoverDirective],
})
export class CartModule {}

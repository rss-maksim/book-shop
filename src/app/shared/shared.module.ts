import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '../orders/orders.module';
import { ChangeFontByClickDirective } from './directives/change-font-by-click.directive';

@NgModule({
    declarations: [ChangeFontByClickDirective],
    imports: [CommonModule],
    exports: [CommonModule, OrdersModule, ChangeFontByClickDirective],
})
export class SharedModule {}

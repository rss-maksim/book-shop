import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '../orders/orders.module';
import { ChangeFontByClickDirective } from './directives/change-font-by-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [ChangeFontByClickDirective, OrderByPipe, NotFoundComponent],
    imports: [CommonModule],
    exports: [CommonModule, OrdersModule, ChangeFontByClickDirective, OrderByPipe],
})
export class SharedModule {}

import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { BookModel } from 'src/models/BookModel';

@Component({
    selector: 'bs-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
    @Input() cartItem!: BookModel;
    @Output() removeCartItemEvent = new EventEmitter<number>();
    constructor() {}

    onRemove(id: number) {
        this.removeCartItemEvent.emit(id);
    }
}

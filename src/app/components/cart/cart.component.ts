import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BookModel } from 'src/models/BookModel';

@Component({
    selector: 'bs-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    @Input() cartItems!: BookModel[];
    @Output() removeItemEvent = new EventEmitter<number>();
    constructor() {}

    remove(id: number) {
        this.removeItemEvent.emit(id);
    }
}

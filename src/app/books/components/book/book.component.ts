import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/BookModel';

@Component({
    selector: 'bs-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
})
export class BookComponent {
    @Input() book!: BookModel;
    @Output() addToCartEvent = new EventEmitter<BookModel>();
    constructor() {}

    onAddToCart(book: BookModel) {
        this.addToCartEvent.emit(book);
    }
}

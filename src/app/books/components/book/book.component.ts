import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/BookModel';
import { Router } from '@angular/router';

@Component({
    selector: 'bs-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
})
export class BookComponent {
    @Input() book!: BookModel;
    @Output() addToCartEvent = new EventEmitter<BookModel>();
    constructor(private router: Router) {}

    onAddToCart(book: BookModel) {
        this.addToCartEvent.emit(book);
    }

    goToBookDetails(id: number): void {
        this.router.navigate(['books', id]);
    }
}

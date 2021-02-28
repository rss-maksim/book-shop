import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { BookModel } from '../../models/BookModel';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
    selector: 'bs-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
    books: BookModel[] = [];
    constructor(private booksService: BooksService, private cartService: CartService) {}

    ngOnInit() {
        this.books = this.booksService.getBooks();
    }

    addToCart(book: BookModel) {
        this.cartService.addBook(book);
    }
}

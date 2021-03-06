import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BooksService, SortParams, SortOption, OrderBy } from '../../services/books.service';
import { BookModel } from '../../models/BookModel';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
    selector: 'bs-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
    books$: Observable<BookModel[]> = of([]);
    sortOptions!: SortOption[];
    constructor(private booksService: BooksService, private cartService: CartService) {}

    ngOnInit() {
        this.books$ = this.booksService.getBooks();
        this.sortOptions = this.booksService.sortOptions;
    }

    get orderBy(): OrderBy {
        return this.booksService.getSortParams().orderBy;
    }

    get isDesc(): boolean {
        return this.booksService.getSortParams().isDesc;
    }

    addToCart(book: BookModel) {
        this.cartService.addBook(book);
    }

    changeParams(sortParams: SortParams) {
        console.log(sortParams);
        this.setSortParams(sortParams);
    }

    getSortParams(): SortParams {
        return this.booksService.getSortParams();
    }

    setSortParams(sortParams: SortParams): void {
        this.booksService.setSortParams(sortParams);
    }
}

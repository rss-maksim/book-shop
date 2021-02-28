import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { BookModel, Category } from 'src/app/books/models/BookModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appTitle', { static: true }) title!: ElementRef;
    book: BookModel = {
        id: Date.now(),
        name: 'Learn Angular',
        description: 'Learn Angular',
        price: 29.99,
        category: Category.Angular,
        createDate: Date.now(),
        isAvailable: true,
    };

    cartItems!: BookModel[];

    ngOnInit() {
        this.cartItems = [];
    }

    ngAfterViewInit() {
        this.title.nativeElement.innerText = 'TITLE';
    }

    buyItem(book: BookModel): void {
        this.cartItems.push({ ...book, id: Date.now() });
    }

    remove(id: number) {
        this.cartItems = this.cartItems.filter((book: BookModel) => id !== book.id);
    }
}

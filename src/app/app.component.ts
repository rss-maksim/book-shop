import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { BookModel, Category } from 'src/app/books/models/BookModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    cartItems!: BookModel[];

    ngOnInit() {
        this.cartItems = [];
    }
}

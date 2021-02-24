import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BookModel } from 'src/models/BookModel';

@Component({
    selector: 'bs-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
    @Input() book: BookModel | null = null;
    @Output() buyItemEvent = new EventEmitter<BookModel>();
    constructor() {}

    onBuy(book: BookModel): void {
        this.buyItemEvent.emit(book);
    }
}

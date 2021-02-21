import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BookModel } from 'src/models/BookModel';

@Component({
  selector: 'bs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input('book') book: BookModel | null = null;
  @Output() buyItemEvent = new EventEmitter<BookModel>()
  constructor() { }

  ngOnInit(): void {

  }

  onBuy(book: BookModel): void {
    this.buyItemEvent.emit(book);
  }
}

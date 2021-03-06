import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { BooksService } from '../../services/books.service';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  userId!: string
  subscription!: Subscription
  book$!: Observable<BookModel>
  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.userId = params.id;
      this.book$ = this.booksService.getBook(parseInt(params.id, 10));
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

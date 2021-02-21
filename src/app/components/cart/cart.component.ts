import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookModel } from 'src/models/BookModel';

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input('cartItems') cartItems!: BookModel[];
  @Output() removeItemEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  remove(id: number) {
    this.removeItemEvent.emit(id)
  }
}

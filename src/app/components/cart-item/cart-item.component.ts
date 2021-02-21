import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { BookModel } from 'src/models/BookModel';

@Component({
  selector: 'bs-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input('cartItem') cartItem!: BookModel;
  @Output() removeCartItemEvent = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id: number) {
    this.removeCartItemEvent.emit(id)
  }
}

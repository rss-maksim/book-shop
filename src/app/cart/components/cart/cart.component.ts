import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { BookModel } from 'src/app/books/models/BookModel';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'bs-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    cartItems: BookModel[] = [];
    amount = 0;
    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartItems = this.cartService.getCart();
        this.amount = this.cartService.getAmount();
    }

    remove(id: number) {
        this.cartService.removeBook(id);
    }

    calculateTotal(): number {
        return this.cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);
    }
}

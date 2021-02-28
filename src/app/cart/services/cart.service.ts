import { Injectable } from '@angular/core';
import { BookModel } from 'src/app/books/models/BookModel';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: BookModel[] = [];
    amount = 0;
    constructor() {}

    getCart(): BookModel[] {
        return this.cart;
    }

    getAmount() {
        return this.amount;
    }

    addBook(book: BookModel): void {
        this.cart.push(book);
        this.updateCartData();
    }

    removeBook(id: number) {
        this.cart = this.cart.filter((book: BookModel) => id !== book.id);
        this.updateCartData();
        console.log('removeBook', id);
    }

    increaseQuantity() {}

    decreaseQuantity() {}

    removeAllBooks() {
        this.cart = [];
    }

    updateCartData() {
        this.amount = this.cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
    }
}

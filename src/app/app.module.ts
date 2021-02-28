import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';

@NgModule({
    declarations: [AppComponent, BookComponent, CartComponent, CartItemComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, BooksModule, CartModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

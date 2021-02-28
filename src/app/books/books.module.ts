import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { MaterialModule } from '../maretial/material.module';

@NgModule({
    declarations: [BookListComponent, BookComponent],
    imports: [CommonModule, MaterialModule],
    exports: [BookListComponent, BookComponent],
})
export class BooksModule {}

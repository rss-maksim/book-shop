import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { MaterialModule } from '../maretial/material.module';
import { SharedModule } from '../shared/shared.module';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';

@NgModule({
    declarations: [BookListComponent, BookComponent, SortPanelComponent],
    imports: [CommonModule, MaterialModule, SharedModule],
    exports: [BookListComponent, BookComponent, SortPanelComponent],
})
export class BooksModule {}

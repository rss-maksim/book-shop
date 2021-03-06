import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { MaterialModule } from '../maretial/material.module';
import { SharedModule } from '../shared/shared.module';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

const routes: Routes = [
    { path: '', component: BookListComponent, pathMatch: 'full' },
    { path: ':id', component: BookDetailsComponent, pathMatch: 'full' },
];

@NgModule({
    declarations: [BookListComponent, BookComponent, SortPanelComponent, BookDetailsComponent],
    imports: [CommonModule, MaterialModule, SharedModule, RouterModule.forChild(routes)],
    exports: [BookListComponent, BookComponent, SortPanelComponent],
})
export class BooksModule {}

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { BookModel, Category } from '../models/BookModel';

const books: BookModel[] = [
    {
        id: 1,
        name: 'Javascript',
        description: 'Learning JS',
        price: 39.99,
        category: Category.Javascript,
        createDate: Date.now(),
        isAvailable: true,
        count: 23,
    },
    {
        id: 2,
        name: 'Angular',
        description: 'Learning Angular',
        price: 29.99,
        category: Category.Angular,
        createDate: Date.now(),
        isAvailable: true,
        count: 17,
    },
    {
        id: 3,
        name: 'Node',
        description: 'Learning Node',
        price: 59.99,
        category: Category.Node,
        createDate: Date.now(),
        isAvailable: true,
        count: 4,
    },
    {
        id: 4,
        name: 'React',
        description: 'Learning React',
        price: 19.99,
        category: Category.React,
        createDate: Date.now(),
        isAvailable: true,
        count: 12,
    },
];

export type OrderBy = 'name' | 'price' | 'count';
export interface SortParams {
    orderBy: OrderBy;
    isDesc: boolean;
}

export interface SortOption {
    label: string;
    value: OrderBy;
}

const sortOptions: SortOption[] = [
    { label: 'Name', value: 'name' },
    { label: 'Price', value: 'price' },
    { label: 'Count', value: 'count' },
];

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    sortParams: SortParams = { orderBy: 'name', isDesc: true };
    sortOptions: SortOption[] = sortOptions;

    constructor() {}

    getBooks(): Observable<BookModel[]> {
        return of<BookModel[]>(books);
    }

    getBook(id: number): Observable<BookModel> {
        const book = books.find((book) => book.id === id);
        // @ts-ignore
        return of<BookModel>(book);
    }

    getSortParams(): SortParams {
        return this.sortParams;
    }

    setSortParams(sortParams: SortParams): void {
        this.sortParams = sortParams;
    }
}

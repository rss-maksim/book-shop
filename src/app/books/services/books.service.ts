import { Injectable } from '@angular/core';

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
    },
    {
        id: 2,
        name: 'Angular',
        description: 'Learning Angular',
        price: 29.99,
        category: Category.Angular,
        createDate: Date.now(),
        isAvailable: true,
    },
    {
        id: 3,
        name: 'Node',
        description: 'Learning Node',
        price: 59.99,
        category: Category.Node,
        createDate: Date.now(),
        isAvailable: true,
    },
    {
        id: 4,
        name: 'React',
        description: 'Learning React',
        price: 19.99,
        category: Category.React,
        createDate: Date.now(),
        isAvailable: true,
    },
];

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    constructor() {}

    getBooks(): BookModel[] {
        return books;
    }
}

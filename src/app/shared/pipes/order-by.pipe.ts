import { Pipe, PipeTransform } from '@angular/core';

import { BookModel } from 'src/app/books/models/BookModel';

type OrderBy = 'name' | 'price' | 'count';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(items: BookModel[], orderBy: OrderBy = 'name', isDesc = true): BookModel[] {
        const sorted = items.sort((a: BookModel, b: BookModel) => {
            if (a[orderBy] > b[orderBy]) {
                return -1;
            } else if (a[orderBy] < b[orderBy]) {
                return 1;
            }
            return 0;
        });

        return isDesc ? sorted : sorted.reverse();
    }
}

import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { SortParams, SortOption } from '../../services/books.service';

@Component({
    selector: 'bs-sort-panel',
    templateUrl: './sort-panel.component.html',
    styleUrls: ['./sort-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPanelComponent {
    @Input() sortParams!: SortParams;
    @Input() sortOptions!: SortOption[];
    @Output() changeSortParamsEvent = new EventEmitter();

    constructor() {}

    get isDesc(): boolean {
        return this.sortParams.isDesc;
    }

    onChange({ value }: MatSelectChange) {
        const sortParams = { ...this.sortParams, orderBy: value };
        this.changeSortParamsEvent.emit(sortParams);
    }

    onChangeDirection(): void {
        const sortParams = { ...this.sortParams, isDesc: !this.sortParams.isDesc };
        this.changeSortParamsEvent.emit(sortParams);
    }
}

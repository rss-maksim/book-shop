import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [],
    imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
    exports: [MatCardModule, MatGridListModule, MatButtonModule, MatIconModule, MatSelectModule],
})
export class MaterialModule {}

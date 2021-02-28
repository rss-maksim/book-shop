import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
    exports: [BrowserAnimationsModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}

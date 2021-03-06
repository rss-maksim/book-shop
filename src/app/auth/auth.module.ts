import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [AuthGuard],
  imports: [
    CommonModule
  ],
  exports: [AuthGuard]
})
export class AuthModule { }

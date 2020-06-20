import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule
  ],
  exports: [ReviewComponent]
})
export class ReviewModule { }

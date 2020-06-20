import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewModule } from '../review/review.module';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    ReviewModule,
    PaginationModule
  ],
  exports: [ReviewsComponent]
})
export class ReviewsModule { }

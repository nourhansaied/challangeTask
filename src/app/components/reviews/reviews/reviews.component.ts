import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'src/services/pagination.service';
import { GetProductService } from 'src/services/get-product.service';
import { ReviewsService } from 'src/services/reviews.service';
import { Review } from 'src/types/types';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  reviewNumber: number = 1;
  public currentReviews: Review[] = [];
  constructor(private _PaginationService: PaginationService, private _ReviewsService: ReviewsService) {

  }

  ngOnInit(): void {
    this.getPaginationData();
    this.updatedReviews();
  }

  getPaginationData() {
    this._PaginationService.getCurrentStartIndex().subscribe(currentIndex => {
      if (currentIndex || currentIndex === 0) {
        this.currentReviews.length = 0;
        this.reviewNumber = currentIndex + 1;
        this.currentReviews.push(this.reviews[currentIndex]);
        if (currentIndex + 1) this.currentReviews.push(this.reviews[currentIndex + 1]);
      }
    });
  }
  updatedReviews() {
    this._ReviewsService.getCurrentReviews().subscribe(review => {
      this.reviews = review;
      this.reviewNumber = 1;
      this.currentReviews.length = 0;
      this.currentReviews.push(this.reviews[0]);
      this.currentReviews.push(this.reviews[1]);
      this._PaginationService.setCurrentStartIndex(0);
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'src/services/pagination.service';
import { GetProductService } from 'src/services/get-product.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: any = [];
  reviewNumber: number = 1;
  public currentReviews: any = [];
  constructor(private _PaginationService: PaginationService, private _GetProductService: GetProductService) {
    this._PaginationService.getCurrentStartIndex().subscribe(currentIndex => {
      if (currentIndex || currentIndex === 0) {
        this.currentReviews.length = 0;
        this.reviewNumber = currentIndex + 1;
        this.currentReviews.push(this.reviews[currentIndex]);
        if (currentIndex + 1) this.currentReviews.push(this.reviews[currentIndex + 1]);
      }
    });

    this._GetProductService.getcurrentProduct().subscribe(data => {
      if (data && data.reviews) {
        this.reviews = data.reviews;
        this.reviewNumber = 1;
        this.currentReviews.length = 0;
        this.currentReviews.push(this.reviews[0]);
        this.currentReviews.push(this.reviews[1]);
      }
    });
  }

  ngOnInit(): void {
  }

}

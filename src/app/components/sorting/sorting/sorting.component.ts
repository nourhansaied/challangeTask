import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/services/reviews.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  reviews: any;
  constructor(private _ReviewsService: ReviewsService) {

  }

  ngOnInit(): void {
    this.getReviewsScore();
  }
  getReviewsScore() {
    this._ReviewsService.getCurrentReviews().subscribe(data => {
      if (data && data) {
        this.reviews = data;
      }
    });
  }
  sort(order: string) {
    this._ReviewsService.setCurrentReviews(this.reviews.sort(this._ReviewsService.sortScore('score', order)));
  }

}

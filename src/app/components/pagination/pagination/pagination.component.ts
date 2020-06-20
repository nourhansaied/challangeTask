import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'src/services/pagination.service';
import { ReviewsService } from 'src/services/reviews.service';
import { Review } from 'src/types/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  paginationData: Review[] = [];
  public data: any;
  public currentIndexFromStart: number;
  constructor(private _PaginationService: PaginationService, private _ReviewsService: ReviewsService) {
  }

  ngOnInit(): void {
    this.getReviews()
    this.getStartIndex()
  }
  paginate(index) {
    if (typeof index == 'string') {
      let newIndex;
      if (index == 'prev') {
        newIndex = this.currentIndexFromStart - 2
      } else if (index == 'next') {
        newIndex = this.currentIndexFromStart + 2
      }
      this._PaginationService.setCurrentStartIndex(newIndex)
    } else {
      this._PaginationService.setCurrentStartIndex(index)
    }
  }
  getStartIndex() {
    this._PaginationService.getCurrentStartIndex().subscribe(currentIndex => {
      if (currentIndex || currentIndex == 0) {
        this.currentIndexFromStart = currentIndex;
      }
    });
  }
  getReviews() {
    this._ReviewsService.getCurrentReviews().subscribe(res => {
      if (res) {
        this.paginationData = res;
        this.data = new Array(Math.ceil(this.paginationData.length / 2));
      }
    });
  }
}

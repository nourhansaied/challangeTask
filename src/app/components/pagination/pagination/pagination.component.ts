import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'src/services/pagination.service';
import { GetProductService } from 'src/services/get-product.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  paginationData: any = [];
  public data: any;
  public currentIndexFromStart: number;
  constructor(private _PaginationService: PaginationService, private _GetProductService: GetProductService) {
    this._GetProductService.getcurrentProduct().subscribe(res => {
      if (res) {
        this.paginationData = res.reviews;
        this.data = new Array(Math.ceil(this.paginationData.length / 2));
      }
    });
    this._PaginationService.getCurrentStartIndex().subscribe(currentIndex => {
      if (currentIndex || currentIndex == 0) {
        this.currentIndexFromStart = currentIndex
      }
    });
  }

  ngOnInit(): void {

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
}

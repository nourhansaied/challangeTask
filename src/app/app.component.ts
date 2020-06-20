import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from 'src/services/get-all-products.service';
import { Product } from '../types/types.d'
import { GetProductService } from 'src/services/get-product.service';
import { PaginationService } from 'src/services/pagination.service';
import { ReviewsService } from 'src/services/reviews.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allProducts: Product[];
  selectedProduct: any;
  constructor(private _GetAllProductsService: GetAllProductsService, private _ReviewsService: ReviewsService,
    private _GetProductService: GetProductService, private _PaginationService: PaginationService) {
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._GetAllProductsService.getAllProducts().subscribe(data => {
      this.allProducts = data
    })
  }
  getProduct(id) {
    this._GetProductService.getProduct(id).subscribe(product => {
      this.selectedProduct = product;
      this._GetProductService.setcurrentProduct(product);
      this._PaginationService.setCurrentStartIndex(0);
      this._ReviewsService.setCurrentReviews(product.reviews)
    })
  }
}

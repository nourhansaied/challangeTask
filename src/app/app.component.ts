import { Component } from '@angular/core';
import { GetAllProductsService } from 'src/services/get-all-products.service';
import { Product } from '../types/types.d'
import { GetProductService } from 'src/services/get-product.service';
import { PaginationService } from 'src/services/pagination.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allProducts: Product[];
  selectedProduct: any;
  constructor(private _GetAllProductsService: GetAllProductsService,
    private _GetProductService: GetProductService, private _PaginationService: PaginationService) {
    this._GetAllProductsService.getAllProducts().subscribe(data => {
      this.allProducts = data
    })

  }
  getProduct(id) {
    this._GetProductService.getProduct(id).subscribe(product => {
      this.selectedProduct = product;
      this._GetProductService.setcurrentProduct(product);
      this._PaginationService.setCurrentStartIndex(0);
    })
  }
}

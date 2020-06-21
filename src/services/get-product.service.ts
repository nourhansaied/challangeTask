import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Endpoint } from 'src/types/enums';
import { APIService } from './api.service';
import { Product } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  public currentProduct: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private _APIService: APIService) { }
  /**
   * @memberof GetProductService
   * @name getProduct
   * @param id product id we need to get 
   * @returns Observable ... returns the product details
   */
  public getProduct(id): Observable<any> {
    return this._APIService.get(
      { endpoint: Endpoint.getOneProduct, params: { id: id } }
    )
  }

  /**
   * @memberof GetProductService
   * @name setcurrentProduct
   * @param data the details of current product from type of Product
   */
  setcurrentProduct(data: Product) {
    this.currentProduct.next(data)
  }
  /**
   * @memberof GetProductService
   * @name getcurrentProduct
   * @returns Observable ... any changes happens in current product returns from here
   */
  getcurrentProduct(): Observable<any> {
    return this.currentProduct.asObservable();
  }
}

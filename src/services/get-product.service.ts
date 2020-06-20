import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Endpoint } from 'src/types/enums';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  public currentProduct: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private _APIService: APIService) { }
  public getProduct(id): Observable<any> {
    return this._APIService.get(
      { endpoint: Endpoint.getOneProduct, params: { id: id } }
    )
  }
  setcurrentProduct(data: any) {
    this.currentProduct.next(data)
  }
  getcurrentProduct(): Observable<any> {
    return this.currentProduct.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Endpoint } from 'src/types/enums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {

  constructor(private _APIService: APIService) {
  }
  /**
   * @memberof GetAllProductsService
   * @name getAllProducts
   * @returns Observable of the get request 
   */
  public getAllProducts(): Observable<any> {
    return this._APIService.get(
      { endpoint: Endpoint.getAllProducts }
    )
  }
}

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
  public getAllProducts(): Observable<any> {
    return this._APIService.get(
      { endpoint: Endpoint.getAllProducts }
    )
  }
}

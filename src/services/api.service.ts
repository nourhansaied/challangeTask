import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Endpoint } from 'src/types/enums';
import { pluck } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class APIService {
  private httpHeaders: HttpHeaders = new HttpHeaders();
  constructor(private _HttpClient: HttpClient) {
    // language could be variable and it depend on current language
    this.httpHeaders = new HttpHeaders()
      .set('Accept-Language', 'en');
  }
  /**
   * @memberof APIService
   * @name get get request using httpClient
   * @param options 
   */
  get(options) {
    this.httpHeaders['Accept-Language'] = new HttpHeaders()
      .set('Accept-Language', 'en');
    let endPoint = this.resolveUrlParams(options.endpoint, options.params)
    const params = this.getQueryParams(options.queryParams)
    const request = this._HttpClient.get(endPoint,
      {
        headers: this.httpHeaders,
        params
      }
    )
    return options.extractData ? request.pipe(pluck('data')) : request
  }

  /**
   * @memberof APIService
   * @name getQueryParams
   * @param queryParams 
   * @description extract query params
   */
  public getQueryParams(queryParams: any) {
    let params = new HttpParams();
    for (let key in queryParams) {
      params = params.append(key, queryParams[key])
    }
    return params;
  }
  /**
   * @memberof APIService
   * @name resolveUrlParams
   * @param url  endpoint we call
   * @param params parameters in any request
   */
  resolveUrlParams(url: Endpoint, params: Object) {
    if (!params) return url;
    const resolved = url.split('/').map((component) => {
      if (component[0] === ':') {
        const key = component.slice(1)
        if (params.hasOwnProperty(key)) return params[key];
        throw `Param ':${key}' value was not found`
      } else {
        return component
      }
    })
    return resolved.join('/')
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  public currentReviews: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }
  /**
   * @memberof ReviewsService
   * @name setCurrentReviews
   * @param data current review array 
   */
  setCurrentReviews(data: Review[]) {
    this.currentReviews.next(data)
  }
  /**
   * @memberof ReviewsService
   * @name getCurrentReviews
   * @returns Observable ... returns when ever reviews changes
   */
  getCurrentReviews(): Observable<any> {
    return this.currentReviews.asObservable();
  }
  /**
   * @memberof ReviewsService
   * @name sortScore
   * @param key sort by score as we can reuse this function  for anther key 
   * @param order opyion user can choose between asc || desc
   */
  public sortScore(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = 1;
      } else if (a[key] < b[key]) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}

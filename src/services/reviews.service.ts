import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  public currentReviews: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }
  setCurrentReviews(data: any) {
    this.currentReviews.next(data)
  }
  getCurrentReviews(): Observable<any> {
    return this.currentReviews.asObservable();
  }
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

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public currentIndex: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  constructor() { }
  /**
   * @memberof PaginationService
   * @name setCurrentStartIndex
   * @param index the index of current pagination index
   */
  setCurrentStartIndex(index: number) {
    this.currentIndex.next(index)
  }
  /**
   * @memberof PaginationService
   * @name getCurrentStartIndex
   * @returns Observable .... current Index ehnever change
   */
  getCurrentStartIndex(): Observable<number> {
    return this.currentIndex.asObservable();
  }
}

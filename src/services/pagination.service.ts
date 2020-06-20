import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public currentIndex: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  constructor() { }
  setCurrentStartIndex(index: number) {
    this.currentIndex.next(index)
  }
  getCurrentStartIndex(): Observable<number> {
    return this.currentIndex.asObservable();
  }
}

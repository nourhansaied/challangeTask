import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingComponent } from './sorting/sorting.component';



@NgModule({
  declarations: [SortingComponent],
  imports: [
    CommonModule
  ],
  exports: [SortingComponent]
})
export class SortingModule { }

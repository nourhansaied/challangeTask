import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from 'src/services/api.service';
import { ProductModule } from './components/product/product.module';
import { ImageGalleryModule } from './components/image-gallery/image-gallery.module';
import { ReviewsModule } from './components/reviews/reviews.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    ImageGalleryModule,
    ReviewsModule,

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

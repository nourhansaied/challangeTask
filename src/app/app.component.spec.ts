import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetProductService } from 'src/services/get-product.service';
import { GetAllProductsService } from 'src/services/get-all-products.service';
import { ReviewsService } from 'src/services/reviews.service';
import { PaginationService } from 'src/services/pagination.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [GetProductService, GetAllProductsService, ReviewsService, PaginationService]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
      })
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});

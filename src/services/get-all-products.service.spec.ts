import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetAllProductsService } from './get-all-products.service';
import { HttpClient } from '@angular/common/http';

describe('GetAllProductsService', () => {
  let service: GetAllProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetAllProductsService]
    });
    service = TestBed.inject(GetAllProductsService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([GetAllProductsService], (service: GetAllProductsService) => {
    expect(service).toBeTruthy();
  }));
});

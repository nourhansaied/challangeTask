import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetProductService } from './get-product.service';
import { HttpClient } from '@angular/common/http';

describe('GetProductService', () => {
  let service: GetProductService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetProductService]
    });
    service = TestBed.inject(GetProductService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', inject([GetProductService], (service: GetProductService) => {
    expect(service).toBeTruthy();
  }));
});

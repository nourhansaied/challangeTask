import { TestBed } from '@angular/core/testing';

import { GetAllProductsService } from './get-all-products.service';

describe('GetAllProductsService', () => {
  let service: GetAllProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VinayakShopFormService } from './vinayak-shop-form.service';

describe('VinayakShopFormService', () => {
  let service: VinayakShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinayakShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

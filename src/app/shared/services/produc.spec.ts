import { TestBed } from '@angular/core/testing';

import { Produc } from './produc';

describe('Produc', () => {
  let service: Produc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Produc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

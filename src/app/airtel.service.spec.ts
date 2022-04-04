import { TestBed } from '@angular/core/testing';

import { AirtelService } from './airtel.service';

describe('AirtelService', () => {
  let service: AirtelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

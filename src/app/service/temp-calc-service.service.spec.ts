import { TestBed } from '@angular/core/testing';

import { TempCalcService } from './temp-calc.service';

describe('TempCalcServiceService', () => {
  let service: TempCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

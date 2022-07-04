import { TestBed } from '@angular/core/testing';

import { SearhLotService } from './searh-lot.service';

describe('SearhLotService', () => {
  let service: SearhLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearhLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

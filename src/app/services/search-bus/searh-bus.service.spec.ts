import { TestBed } from '@angular/core/testing';

import { SearhBusService } from './searh-bus.service';

describe('SearhBusService', () => {
  let service: SearhBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearhBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { RacServicesService } from './rac-services.service';

describe('RacServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacServicesService]
    });
  });

  it('should be created', inject([RacServicesService], (service: RacServicesService) => {
    expect(service).toBeTruthy();
  }));
});

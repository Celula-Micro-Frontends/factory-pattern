import { TestBed } from '@angular/core/testing';

import { RoadTransportFactory } from './road-transport-factory';

describe('RoadTransportFactory', () => {
  let service: RoadTransportFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadTransportFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AirTransportFactory } from './air-transport-factory';

describe('AirTransportFactory', () => {
  let service: AirTransportFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirTransportFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

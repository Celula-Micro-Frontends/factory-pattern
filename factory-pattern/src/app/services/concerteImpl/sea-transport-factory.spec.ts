import { TestBed } from '@angular/core/testing';

import { SeaTransportFactory } from './sea-transport-factory';

describe('SeaTransportFactory', () => {
  let service: SeaTransportFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeaTransportFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

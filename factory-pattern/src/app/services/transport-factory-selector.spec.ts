import { TestBed } from '@angular/core/testing';

import { TransportFactorySelector } from './transport-factory-selector';

describe('TransportFactorySelector', () => {
  let service: TransportFactorySelector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportFactorySelector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

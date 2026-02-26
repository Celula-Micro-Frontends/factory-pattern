import { Injectable } from '@angular/core';
import { TransportFactory } from '../factory/factory';
import { RoadTransportFactory } from './concerteImpl/road-transport-factory';
import { SeaTransportFactory } from './concerteImpl/sea-transport-factory';

@Injectable({
  providedIn: 'root',
})
export class TransportFactorySelector {
  constructor(
    private roadFactory: RoadTransportFactory,
    private seaFactory: SeaTransportFactory,
  ) {}

  getFactory = (type: 'road' | 'sea'): TransportFactory => {
    switch (type) {
      case 'road':
        return this.roadFactory;
      case 'sea':
        return this.seaFactory;
    }
  };
}

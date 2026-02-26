import { Injectable } from '@angular/core';
import { TransportFactory } from '../factory/factory';
import { RoadTransportFactory } from './concerteCreator/road-transport-factory';
import { SeaTransportFactory } from './concerteCreator/sea-transport-factory';
import { AirTransportFactory } from './concerteCreator/air-transport-factory';

@Injectable({
  providedIn: 'root',
})
export class TransportFactorySelector {
  constructor(
    private roadFactory: RoadTransportFactory,
    private seaFactory: SeaTransportFactory,
    private airFactory: AirTransportFactory,
  ) {}

  getFactory = (type: 'road' | 'sea' | 'air'): TransportFactory => {
    switch (type) {
      case 'road':
        return this.roadFactory;
      case 'sea':
        return this.seaFactory;
      case 'air':
        return this.airFactory;
    }
  };
}

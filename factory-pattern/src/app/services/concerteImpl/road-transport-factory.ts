import { Injectable, Type } from '@angular/core';
import { TransportFactory } from '../../factory/factory';
import { TransportComponent } from '../../factory/interface';
import { TruckComponent } from '../../components/truck-component/truck-component';

@Injectable({
  providedIn: 'root',
})
export class RoadTransportFactory extends TransportFactory {
  override create(): Type<TransportComponent> {
    return TruckComponent;
  }
}

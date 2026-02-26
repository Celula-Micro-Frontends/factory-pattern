import { Injectable, Type } from '@angular/core';
import { TransportComponent } from '../../factory/interface';
import { ShipComponent } from '../../components/ship-component/ship-component';
import { TransportFactory } from '../../factory/factory';

@Injectable({
  providedIn: 'root',
})
export class SeaTransportFactory extends TransportFactory {
  override create(): Type<TransportComponent> {
    return ShipComponent;
  }
}

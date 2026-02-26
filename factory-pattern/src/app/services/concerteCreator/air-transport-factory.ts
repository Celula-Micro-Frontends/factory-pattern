import { Injectable, Type } from '@angular/core';
import { TransportFactory } from '../../factory/factory';
import { TransportComponent } from '../../factory/interface';
import { PlaneComponent } from '../../components/plane-component/plane-component';

@Injectable({
  providedIn: 'root',
})
export class AirTransportFactory extends TransportFactory {
  override create(): Type<TransportComponent> {
    return PlaneComponent;
  }
}

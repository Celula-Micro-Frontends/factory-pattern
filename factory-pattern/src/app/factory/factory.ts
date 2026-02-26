import { Type } from '@angular/core';
import { TransportComponent } from './interface';

export abstract class TransportFactory {
  abstract create(): Type<TransportComponent>;
}

import { Component, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { TransportComponent } from '../../factory/interface';
import { Shimpemnt } from '../../models/Shipment';
import { TransportFactorySelector } from '../../services/transport-factory-selector';

@Component({
  selector: 'app-transport-container-component',
  imports: [NgComponentOutlet],
  templateUrl: './transport-container-component.html',
  styleUrl: './transport-container-component.css',
})
export class TransportContainerComponent {
  component!: Type<TransportComponent>;

  shipment: Shimpemnt = {
    origin: 'Bogota',
    destination: 'Medellin',
    weight: 200,
  };

  componentInputs = {
    shipment: this.shipment,
  };

  constructor(private selector: TransportFactorySelector) {
    this.changeTransport('road');
  }

  changeTransport = (type: 'road' | 'sea') => {
    const factory = this.selector.getFactory(type);
    this.component = factory.create();
  };
}

import { Component, Input } from '@angular/core';
import { TransportComponent } from '../../factory/interface';
import { Shimpemnt } from '../../models/Shipment';

@Component({
  selector: 'app-truck-component',
  imports: [],
  templateUrl: './truck-component.html',
  styleUrl: './truck-component.css',
})
export class TruckComponent implements TransportComponent {
  @Input() shipment!: Shimpemnt;

  calculateCost = (): number => {
    return this.shipment.weight * 2;
  };

  getEstimatedDays = (): number => {
    return 3;
  };

  busType = 'Carga';
}

import { Component, Input } from '@angular/core';
import { TransportComponent } from '../../factory/interface';
import { Shimpemnt } from '../../models/Shipment';

@Component({
  selector: 'app-ship-component',
  imports: [],
  templateUrl: './ship-component.html',
  styleUrl: './ship-component.css',
})
export class ShipComponent implements TransportComponent {
  @Input() shipment!: Shimpemnt;

  calculateCost(): number {
    return this.shipment.weight * 1.2;
  }

  getEstimatedDays(): number {
    return 7;
  }

  shipType = 'Buque de carga';
}

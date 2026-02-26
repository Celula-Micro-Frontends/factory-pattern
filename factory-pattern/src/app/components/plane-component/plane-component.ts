import { Component, Input } from '@angular/core';
import { TransportComponent } from '../../factory/interface';
import { Shimpemnt } from '../../models/Shipment';

@Component({
  selector: 'app-plane-component',
  imports: [],
  templateUrl: './plane-component.html',
  styleUrl: './plane-component.css',
})
export class PlaneComponent implements TransportComponent {
  @Input() shipment!: Shimpemnt;

  calculateCost(): number {
    return this.shipment.weight * 5;
  }

  getEstimatedDays(): number {
    return 5;
  }

  planeType = 'Avión de carga';
}

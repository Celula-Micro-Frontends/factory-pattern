import { Shimpemnt } from '../models/Shipment';

export interface TransportComponent {
  shipment: Shimpemnt;
  calculateCost(): number;
  getEstimatedDays(): number;
}

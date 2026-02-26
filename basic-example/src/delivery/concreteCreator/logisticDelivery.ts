import { Logistics } from "../abstractCreator/logistics";
import { Ship, Truck } from "../concreteProduct/vahicles";
import { Transport } from "../interface/Transport";

export class RoadLogistics extends Logistics {
  protected createTransport = (): Transport => {
    return new Truck();
  };
}

export class SeaLogistics extends Logistics {
  protected createTransport = (): Transport => {
    return new Ship();
  };
}

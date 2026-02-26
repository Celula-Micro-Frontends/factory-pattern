import { Transport } from "./../interface/Transport";

export class Ship implements Transport {
  deliver = (): void => {
    console.log("Entrega por mar en barco");
  };
}

export class Truck implements Transport {
  deliver = (): void => {
    console.log("Entrega por carretera en bus");
  };
}

import { Transport } from "../interface/Transport";

export abstract class Logistics {
  protected abstract createTransport(): Transport;

  public planDelivery = (): void => {
    const transport = this.createTransport();
    transport.deliver();
  };
}

import { Logistics } from "./delivery/abstractCreator/logistics";
import {
  RoadLogistics,
  SeaLogistics,
} from "./delivery/concreteCreator/logisticDelivery";

const client = (logistics: Logistics) => {
  logistics.planDelivery();
};

const roadLogistic = new RoadLogistics();
const seaLogistic = new SeaLogistics();

client(roadLogistic);
client(seaLogistic);

import { Car } from "../interface/car.interface";
import itemsModel from "../models/items.model";

const getOrders = async (id: string) => {
  const resItem = await itemsModel.findById(id);
  return resItem;
};



export { getOrders };

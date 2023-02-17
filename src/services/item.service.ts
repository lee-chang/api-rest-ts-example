import { Car } from "../interface/car.interface";
import itemsModel from "../models/items.model";

const insertCar = async (item: Car) => {
  const resInsert = await itemsModel.create(item);
  return resInsert;
};

const getCars = async () => {
  const resItems = await itemsModel.find({});
  return resItems;
};

const getCar = async (id: string) => {
  const resItem = await itemsModel.findById(id);
  return resItem;
};

const updateCar = async (id: string, data: Car) => {
  const resItem = await itemsModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return resItem;
};

const deleteCar = async (id: string) => {
    const resItem = await itemsModel.findByIdAndDelete(id);
    return resItem;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };

import { Request, Response } from "express";
import { getCars, insertCar, getCar, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";
import dbConnect from "../config/mongo";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id)
    const data = response ?  response : "NOT_FOUND"
    res.json(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.json(response);
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEMS", err);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await updateCar(id, req.body)
    const data = response ?  response : "NOT_FOUND"
    res.json(data);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const resItem = await insertCar(req.body)
    res.json(resItem);
  } catch (err) {
    handleHttp(res, "ERROR_POST_ITEM", err);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteCar(id)
    const data = response ?  response : "NOT_FOUND"
    res.json(data);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };

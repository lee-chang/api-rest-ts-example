import { StorageUser } from "../interface/storage.interface";
import storageModel from "../models/storage.model";

const registerUpload = async ({ fileName, idUser, path }: StorageUser) => {
  const response = await storageModel.create({
    fileName,
    idUser,
    path,
  });
  return response;
};

export { registerUpload };

import { Schema, model, Types, Model } from "mongoose";
import { StorageUser } from "../interface/storage.interface";

const StorageSchema = new Schema<StorageUser>(
  {
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel = model("storage", StorageSchema);
export default StorageModel;

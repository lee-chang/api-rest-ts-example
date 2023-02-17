import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage.service";
import { RequestExt } from "../interface/reqExtJwt.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const {user,file}= req

    const dataRegister = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    }
    const response = await registerUpload(dataRegister);
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_UPLOAD_FILE",e);
  }
}

export { getFile }
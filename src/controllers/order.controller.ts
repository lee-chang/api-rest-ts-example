import { Request, Response } from "express";
import { RequestExt } from "../interface/reqExtJwt.interface";
import { handleHttp } from "../utils/error.handle";

const getOrder = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VEN LAS PERSONAS CON AUTORIZACIÓN (ROL) Y SESSION/JWT",
      user: req?.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export { getOrder };

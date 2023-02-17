import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interface/reqExtJwt.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop(); // token by user from headers

    const isOk = (await verifyToken(`${jwt}`)) as { id: string }; // -> verifica y retorna el payload (data del token) | "as {}" define el tipado de is Ok, este contiene lo que ira en el token

    if (!isOk) {
      res.status(401);
      return res.send("INVALID_TOKEN_SESSION");
    } else {
      req.user = isOk;
      return next();
    }
  } catch (e) {
    res.status(402);
    return res.send("INVALID_SESSION");
  }
};

export { checkJwt };

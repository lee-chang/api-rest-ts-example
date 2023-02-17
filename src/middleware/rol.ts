import { Response, NextFunction } from "express";
import { RequestExt } from "../interface/reqExtJwt.interface";

/**
 *
 * @param rol Array de roles que pueden acceder a la ruta
 * @returns
 */

const checkRol =
  (roles: Array<String>) =>
  (req: RequestExt, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      const rolByUser = user?.rol || null;

      //Comparar si rolByUser esta incluido en roles
      const checkValueRol = roles.includes(rolByUser);

      if (!checkValueRol) {
        res.status(403);
        return res.send("USER_NOT_PERMISSION");
      }
      return next();

    } catch (e) {
      res.status(403);
      return res.send("ERROR_PERMISSION");
    }
  };

export { checkRol };

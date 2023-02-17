import { getOrder } from "../controllers/order.controller";
import { Router } from "express";
import { checkJwt } from "../middleware/session";
import { checkRol } from "../middleware/rol";

const router = Router();

/**
 * * A esta ruta solo pueden acceder solo los user que tengan una sesión activa
 */

router.get('/', checkJwt,  checkRol(['admin', 'customer']), getOrder )

export { router };
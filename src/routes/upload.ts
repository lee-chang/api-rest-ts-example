import { getFile } from "../controllers/upload.controller";
import { Router } from "express";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get('/', checkJwt ,multerMiddleware.single('myfile') ,getFile )

export { router };
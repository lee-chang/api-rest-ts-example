import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).forEach((file) => {
  const cleanName = cleanFileName(file);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((module) => {
      console.log(`Se cargo la ruta ./${cleanName}`);
      router.use(`/${cleanName}`, module.router);
    });
  }
});

export { router };

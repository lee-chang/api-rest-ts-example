import "dotenv/config";
import express, {Express} from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import helmet from "helmet";

const PORT = process.env.PORT || 3001;
const app: Express = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// * Content Type Config
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));


app.use(router);
db().then(() =>  console.log("Conectado a la base de datos"));


app.listen(PORT, () => {
  console.log(`Listo por el puerto -> ${PORT}`);
});

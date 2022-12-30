import express from "express";
import { mongoConnect } from "./repositories/mongo/MongoConnect";
import { router } from "./routes";
import cors from "cors";
import path from "path";

mongoConnect();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(router);
export { app };

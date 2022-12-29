import { Request, Response, Router } from "express";
import { createClientController } from "./factories/CreateClientFactory";
import { deleteClientController } from "./factories/DeleteClientFactory";
import { getOneClientController } from "./factories/GetOneClientFactory";
import { listClientsController } from "./factories/ListClientsFactory";
import { updateClientController } from "./factories/UpdateClientFactory";

const router = Router();

router.post("/client/create", (req: Request, res: Response) => {
  return createClientController.run(req, res);
});

router.get("/client/list", (req: Request, res: Response) => {
  return listClientsController.run(req, res);
});

router.get("/client/:id", (req: Request, res: Response) => {
  return getOneClientController.run(req, res);
});

router.put("/client/update", (req: Request, res: Response) => {
  return updateClientController.run(req, res);
});

router.delete("/client/delete", (req: Request, res: Response) => {
  return deleteClientController.run(req, res);
});

export { router };

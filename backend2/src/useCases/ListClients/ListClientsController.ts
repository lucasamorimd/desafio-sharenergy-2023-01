import { Request, Response } from "express";
import { ListClientsUseCase } from "./ListClientsUseCase";

export class ListClientsController {
  constructor(private listClientsUseCase: ListClientsUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    try {
      const clients = await this.listClientsUseCase.execute();
      return res.status(200).json({ data: clients, message: "" });
    } catch (err: any) {
      return res.status(400).json({ data: {}, message: err.message });
    }
  }
}

import { Request, Response } from "express";
import { ListClientsUseCase } from "./ListClientsUseCase";

export class ListClientsController {
  constructor(private listClientsUseCase: ListClientsUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    try {
      let page = req.query.page?.toString() ?? "1";
      let perPage = req.query.perPage?.toString() ?? "10";
      const clients = await this.listClientsUseCase.execute(
        parseInt(page),
        parseInt(perPage)
      );
      return res.status(200).json({ data: clients, message: "" });
    } catch (err: any) {
      return res.status(200).json({ error: true, message: err.message });
    }
  }
}

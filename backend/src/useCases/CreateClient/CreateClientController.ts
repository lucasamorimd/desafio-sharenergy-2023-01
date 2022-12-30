import { Request, Response } from "express";
import { ClientDTO } from "../../dto/ClientDTO";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    let data: ClientDTO = req.body;
    try {
      await this.createClientUseCase.execute(data);
      return res.status(201).json({ message: "Client created" });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}

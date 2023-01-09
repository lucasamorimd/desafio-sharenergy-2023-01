import { Request, Response } from "express";
import { ClientDTO } from "../../dto/ClientDTO";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    let data: ClientDTO = req.body;
    try {
      const newClient = await this.createClientUseCase.execute(data);
      return res.status(201).json({data: newClient, message: "Client created" });
    } catch (err: any) {
      console.log(err.message);
      return res.status(200).json({ error: true, message: err.message });
    }
  }
}

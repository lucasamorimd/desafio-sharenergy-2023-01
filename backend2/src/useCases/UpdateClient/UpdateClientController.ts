import { Request, Response } from "express";
import { ClientDTO } from "../../dto/ClientDTO";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    try {
      let data: ClientDTO = req.body;

      await this.updateClientUseCase.execute(data);

      return res.status(201).json({ message: "Client updated" });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}

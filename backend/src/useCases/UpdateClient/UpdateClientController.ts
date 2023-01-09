import { Request, Response } from "express";
import { ClientDTO } from "../../dto/ClientDTO";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    try {
      let data: ClientDTO = req.body;

      let updatedClient = await this.updateClientUseCase.execute(data);

      return res
        .status(201)
        .json({ data: updatedClient, message: "Client updated" });
    } catch (err: any) {
      return res.status(200).json({ error: true, message: err.message });
    }
  }
}

import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
  constructor(private deleteClientUseCase: DeleteClientUseCase) {}

  async run(req: Request, res: Response): Promise<Response> {
    try {
      const id: string = req.params.id;

      await this.deleteClientUseCase.exeucte(id);

      return res.status(201).json({ message: "Cliente deleted" });
    } catch (err: any) {
      return res.status(200).json({ error: true, message: err.message });
    }
  }
}

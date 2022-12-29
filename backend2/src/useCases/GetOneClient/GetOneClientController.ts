import { Request, Response } from "express";
import { GetOneClientUseCase } from "./GetOneClientUseCase";

export class GetOneClientController {
  constructor(private getOneClientUseCase: GetOneClientUseCase) {}
  async run(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const client = await this.getOneClientUseCase.execute(id);

      return res.status(200).json({ data: client });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}

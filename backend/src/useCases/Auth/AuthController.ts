import { Request, Response } from "express";
import { AuthType } from "../../repositories/IUserRepository";
import { AuthUseCase } from "./AuthUseCase";

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}
  async run(req: Request, res: Response): Promise<Response> {
    try {
      let data: AuthType = req.body;
      let response = await this.authUseCase.execute(data);
      return res
        .status(200)
        .json({ data: response, message: "Login feito com sucesso" });
    } catch (err: any) {
      return res.status(403).json({ data: {}, message: err.message });
    }
  }
}
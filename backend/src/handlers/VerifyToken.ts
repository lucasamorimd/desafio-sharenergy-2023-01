import { NextFunction, Request, Response } from "express";

import { IUserRepository } from "../repositories/IUserRepository";

class VerifyToken {
  constructor(private userRepository: IUserRepository) {}
  run(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization;

      if (!token) {
        throw new Error("Não autorizado");
      }

      let decodedToken = JSON.parse(
        Buffer.from(token.substring(6), "base64").toString()
      );

      let user = this.userRepository.verifyToken(decodedToken);

      if (!user) {
        throw new Error("Token inválido");
      }

      return next();
    } catch (err: any) {
      return res.status(403).json({ error: true, message: err.message });
    }
  }
}
export { VerifyToken };

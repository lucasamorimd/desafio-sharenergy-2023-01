import { NextFunction, Request, Response } from "express";

import { IUserRepository } from "../repositories/IUserRepository";
import { createUserToken } from "./createUserToken";
import { verifyIsJson } from "./verifyIsJson";

class VerifyToken {
  constructor(private userRepository: IUserRepository) {}
  async run(req: Request, res: Response, next?: NextFunction) {
    try {
      let token = req.headers.authorization;

      if (!token) {
        throw new Error("Não autorizado");
      }

      let decodedToken = Buffer.from(token.substring(6), "base64").toString();

      let validateIsJson = verifyIsJson(decodedToken);
      if (!validateIsJson) {
        throw new Error("Formato de token inválido");
      }

      let user = await this.userRepository.verifyToken(validateIsJson);

      if (!user) {
        throw new Error("Token inválido");
      }

      if (next) {
        return next();
      }

      token = createUserToken(user);

      return res.status(200).json({ user: user, token: token });
    } catch (err: any) {
      return res.status(200).json({ error: true, message: err.message });
    }
  }
}
export { VerifyToken };

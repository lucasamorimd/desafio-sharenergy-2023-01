import { User } from "../entities/User";
import { authType } from "../types/authType";

import { verifyToken } from "../types/verifyTokenType";
import { IRepository } from "./IRepository";

interface IUserRepository extends IRepository {
  findByEmail(email: string): Promise<User | null>;
  findToAuth(data: authType): Promise<User | null>;
  verifyToken(data: verifyToken): Promise<User | null>;
}

export { IUserRepository };

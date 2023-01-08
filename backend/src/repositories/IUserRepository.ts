import { User } from "../entities/User";
import { authType } from "../types/authType";
import { ResponseUserType } from "../types/ResponseUserType";

import { verifyToken } from "../types/verifyTokenType";
import { IRepository } from "./IRepository";

interface IUserRepository extends IRepository {
  list(page: number): Promise<ResponseUserType>;
  findByEmail(email: string): Promise<User | null>;
  findToAuth(data: authType): Promise<User | null>;
  verifyToken(data: verifyToken): Promise<User | null>;
}

export { IUserRepository };

import { User } from "../entities/User";
import { IRepository } from "./IRepository";

export type AuthType = {
  userName: string;
  password: string;
};

export interface IUserRepository extends IRepository {
  findByEmail(email: string): Promise<User | null>;
  findToAuth(data: AuthType): Promise<User | null>;
}

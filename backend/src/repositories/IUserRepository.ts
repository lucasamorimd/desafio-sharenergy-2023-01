import { UserDTO } from "../dto/UserDTO";
import { User } from "../entities/User";
import { IRepository } from "./IRepository";

export interface IUserRepository extends IRepository {
  findByEmail(email: string): Promise<User | null>;
  findToAuth(user: UserDTO): Promise<User | null>;
}

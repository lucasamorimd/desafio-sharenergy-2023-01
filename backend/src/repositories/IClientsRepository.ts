import { Client } from "../entities/Client";
import { ResponseClientType } from "../types/ResponseClientType";
import { IRepository } from "./IRepository";

interface IClientsRepository extends IRepository {
  findByEmail(email: string): Promise<Client | null>;
  list(page: number): Promise<ResponseClientType>;
}
export { IClientsRepository };

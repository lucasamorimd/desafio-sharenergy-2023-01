import { Client } from "../entities/Client";
import { IRepository } from "./IRepository";

export interface IClientsRepository extends IRepository {
  findByEmail(email: string): Promise<Client | null>;
}

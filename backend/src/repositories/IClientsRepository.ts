import { Client } from "../entities/Client";
import { IRepository } from "./IRepository";

interface IClientsRepository extends IRepository {
  findByEmail(email: string): Promise<Client | null>;
}
export { IClientsRepository };

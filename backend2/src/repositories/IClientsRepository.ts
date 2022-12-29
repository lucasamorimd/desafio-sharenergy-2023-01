import { Client } from "../entities/Client";

export interface IClientsRepository {
  list(): Promise<Client[]>;
  findByEmail(email: string): Promise<Client | null>;
  save(cliente: Client): Promise<void>;
  update(cliente: Client): Promise<void>;
  delete(client: Client): Promise<void>;
}

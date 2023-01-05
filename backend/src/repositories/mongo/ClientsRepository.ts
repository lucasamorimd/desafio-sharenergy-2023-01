import { Model } from "mongoose";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class ClientsRepository implements IClientsRepository {
  constructor(private model: Model<Client>) {}

  async list(): Promise<Client[]> {
    return await this.model.find();
  }

  async findByEmail(email: string): Promise<Client | null> {
    return await this.model.findOne({ email });
  }

  async findById(id: string): Promise<Client | null> {
    return await this.model.findOne({ id: id });
  }

  async save(cliente: Client): Promise<void> {
    await this.model.create(cliente);
  }

  async update(cliente: Client): Promise<void> {
    await this.model.updateOne({ id: cliente.id }, cliente);
  }

  async delete(client: Client): Promise<void> {
    await this.model.deleteOne({ id: client.id });
  }
}

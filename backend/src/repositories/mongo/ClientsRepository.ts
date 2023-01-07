import { Model } from "mongoose";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class ClientsRepository implements IClientsRepository {
  constructor(private model: Model<Client>) {}

  async list(page: number = 1, perPage: number = 10): Promise<Client[]> {
    const skip = perPage * (page - 1);
    return await this.model
      .find()
      .sort({
        day: 1,
        month: 1,
        year: 1,
        hour: 1,
        seconds: 1,
      })
      .skip(skip)
      .limit(perPage);
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

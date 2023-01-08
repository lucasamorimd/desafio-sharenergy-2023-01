import { Model } from "mongoose";
import { Client } from "../../entities/Client";
import { ResponseClientType } from "../../types/ResponseClientType";
import { IClientsRepository } from "../IClientsRepository";

export type ListResponseClients = {
  total: number;
  clients: Client[];
  perPage: number;
  page: number;
};

export class ClientsRepository implements IClientsRepository {
  constructor(private model: Model<Client>) {}

  async list(
    page: number = 1,
    perPage: number = 10
  ): Promise<ResponseClientType> {
    const skip = perPage * (page - 1);
    return {
      clients: await this.model
        .find()
        .sort([["created_at", "descending"]])
        .skip(skip)
        .limit(perPage),
      total: await this.model.count(),
      page: page,
      perPage: perPage,
    };
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

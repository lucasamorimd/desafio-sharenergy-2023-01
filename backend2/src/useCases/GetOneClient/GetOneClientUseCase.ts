import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class GetOneClientUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute(id: string): Promise<Client | null> {
    let clientFounded = await this.clientsRepository.findById(id);
    if (clientFounded === null) {
      throw new Error("Client not found");
    }
    return await this.clientsRepository.findById(id);
  }
}

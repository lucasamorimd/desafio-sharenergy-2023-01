import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class GetOneClientUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute(id: string): Promise<Client | null> {
    const clientFound = await this.clientsRepository.findById(id);
    if (clientFound === null) {
      throw new Error("Client not found");
    }
    return clientFound;
  }
}

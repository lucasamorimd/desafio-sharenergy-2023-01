import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class GetOneClientUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute(id: string): Promise<Client | null> {
    return await this.clientsRepository.findById(id);
  }
}

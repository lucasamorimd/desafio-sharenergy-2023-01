import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class ListClientsUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute(page: number = 1, perPage: number = 10): Promise<Client[]> {
    return await this.clientsRepository.list(page, perPage);
  }
}

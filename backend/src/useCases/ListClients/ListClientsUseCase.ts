import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class ListClientsUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute(): Promise<Client[]> {
    return await this.clientsRepository.list();
  }
}

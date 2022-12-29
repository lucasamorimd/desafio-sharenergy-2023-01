import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class ListClientsUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute() {
    return await this.clientsRepository.list();
  }
}

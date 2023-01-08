import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";
import { ResponseClientType } from "../../types/ResponseClientType";

export class ListClientsUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async execute(
    page: number = 1,
    perPage: number = 10
  ): Promise<ResponseClientType> {
    return await this.clientsRepository.list(page, perPage);
  }
}

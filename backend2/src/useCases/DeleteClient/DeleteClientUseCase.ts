import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class DeleteClientUseCase {
  constructor(private clientsRepository: ClientsRepository) {}
  async exeucte(id: string) {
    const client = await this.clientsRepository.findById(id);

    if (client === null) {
      throw new Error("Client not found");
    }

    const data: Client = client;

    await this.clientsRepository.delete(data);
  }
}

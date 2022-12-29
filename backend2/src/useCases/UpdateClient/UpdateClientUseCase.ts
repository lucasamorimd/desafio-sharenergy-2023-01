import { exit } from "process";
import { ClientDTO } from "../../dto/ClientDTO";
import { Client } from "../../entities/Client";
import { ClientsRepository } from "../../repositories/mongo/ClientsRepository";

export class UpdateClientUseCase {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute(client: ClientDTO) {
    const clientExists = await this.clientsRepository.findByEmail(client.email);

    if (clientExists && clientExists.id !== client.id) {
      throw new Error("Already exists a client with this email");
    }

    const clientToUpdate = new Client(client, client.id);

    await this.clientsRepository.update(clientToUpdate);
  }
}

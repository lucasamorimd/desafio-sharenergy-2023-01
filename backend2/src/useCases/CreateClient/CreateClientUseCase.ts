import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { ClientDTO } from "../../dto/ClientDTO";

export class CreateClientUseCase {
  constructor(private clientRepository: IClientsRepository) {}

  async execute(data: ClientDTO) {
    const clientExists = await this.clientRepository.findByEmail(data.email);

    if (clientExists) {
      throw new EvalError("Client already exists on database");
    }

    const client = new Client(data);

    await this.clientRepository.save(client);
  }
}

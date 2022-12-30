import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class ClientRepository implements IClientsRepository {
  list(): Promise<Client[]> {
    throw new Error(
      "Método list - Você acabou de listar todos os usuários de um banco postgres"
    );
  }
  findByEmail(email: string): Promise<Client | null> {
    throw new Error(
      "Método findByEmail - Você acabou de buscar um usuário pelo email dele em um banco postgres"
    );
  }
  save(cliente: Client): Promise<void> {
    throw new Error(
      "Método save - Você acabou de inserir um usuário em um banco postgres"
    );
  }
  update(cliente: Client): Promise<void> {
    throw new Error(
      "Método update - Você acabou de atualizar um usuário em um banco postgres"
    );
  }
  delete(client: Client): Promise<void> {
    throw new Error(
      "Método update - Você acabou de deletar um usuário em um banco postgres"
    );
  }
}

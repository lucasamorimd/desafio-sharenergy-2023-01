import { ClientsRepository } from "../repositories/mongo/ClientsRepository";
import ClientModel from "../repositories/mongo/Models/Client";
import { ClientRepository } from "../repositories/postgres/ClientRepository";
import { DeleteClientController } from "../useCases/DeleteClient/DeleteClienteController";
import { DeleteClientUseCase } from "../useCases/DeleteClient/DeleteClientUseCase";

const mongoModel = new ClientModel();

const clientRepository = new ClientsRepository(mongoModel.getModel());

// Testar a substituição de um repository por outro
// const clientRepositoryPostgres = new ClientRepository();

const deleteClientUseCase = new DeleteClientUseCase(clientRepository);

const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientController };

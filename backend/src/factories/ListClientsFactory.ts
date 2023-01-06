import { ClientsRepository } from "../repositories/mongo/ClientsRepository";
import ClientModel from "../repositories/mongo/Models/Client";
import { ClientRepository } from "../repositories/postgres/ClientRepository";
import { ListClientsController } from "../useCases/ListClients/ListClientsController";
import { ListClientsUseCase } from "../useCases/ListClients/ListClientsUseCase";

const mongoModel = new ClientModel();

const clientRepository = new ClientsRepository(mongoModel.getModel());

// Testar a substituição de um repository por outro
// const clientRepositoryPostgres = new ClientRepository();

const listClientsUseCase = new ListClientsUseCase(clientRepository);

const listClientsController = new ListClientsController(listClientsUseCase);

export { listClientsController };

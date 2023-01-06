import { ClientsRepository } from "../repositories/mongo/ClientsRepository";
import ClientModel from "../repositories/mongo/Models/Client";
import { ClientRepository } from "../repositories/postgres/ClientRepository";
import { CreateClientController } from "../useCases/CreateClient/CreateClientController";
import { CreateClientUseCase } from "../useCases/CreateClient/CreateClientUseCase";

const mongoModel = new ClientModel();

const clientRepository = new ClientsRepository(mongoModel.getModel());

// Testar a substituição de um repository por outro
// const clientRepositoryPostgres = new ClientRepository();

const createClientUseCase = new CreateClientUseCase(clientRepository);

const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };

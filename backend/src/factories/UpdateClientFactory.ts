import { ClientsRepository } from "../repositories/mongo/ClientsRepository";
import ClientModel from "../repositories/mongo/Models/Client";
import { ClientRepository } from "../repositories/postgres/ClientRepository";
import { UpdateClientController } from "../useCases/UpdateClient/UpdateClientController";
import { UpdateClientUseCase } from "../useCases/UpdateClient/UpdateClientUseCase";

const mongoModel = new ClientModel();

const clientRepository = new ClientsRepository(mongoModel.getModel());

// Testar a substituição de um repository por outro
// const clientRepositoryPostgres = new ClientRepository();

const updateClientUseCase = new UpdateClientUseCase(clientRepository);

const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController };

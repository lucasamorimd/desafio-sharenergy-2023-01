import { ClientsRepository } from "../repositories/mongo/ClientsRepository";
import ClientModel from "../repositories/mongo/Models/Client";
import { ClientRepository } from "../repositories/postgres/ClientRepository";
import { GetOneClientController } from "../useCases/GetOneClient/GetOneClientController";
import { GetOneClientUseCase } from "../useCases/GetOneClient/GetOneClientUseCase";

const mongoModel = new ClientModel();

const clientRepository = new ClientsRepository(mongoModel.getModel());

// Testar a substituição de um repository por outro
// const clientRepositoryPostgres = new ClientRepository();

const getOneClientUseCase = new GetOneClientUseCase(clientRepository);

const getOneClientController = new GetOneClientController(getOneClientUseCase);

export { getOneClientController };

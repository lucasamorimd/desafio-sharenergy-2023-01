import UserModel from "../repositories/mongo/Models/User";

import { UserRepository } from "../repositories/mongo/UserRepository";

import { AuthController } from "../useCases/Auth/AuthController";

import { AuthUseCase } from "../useCases/Auth/AuthUseCase";

const mongoModel = new UserModel();

const userRepository = new UserRepository(mongoModel.getModel());

const authUseCase = new AuthUseCase(userRepository);

const authController = new AuthController(authUseCase);

export { authController };

import { Model } from "mongoose";
import { UserDTO } from "../../dto/UserDTO";
import { User } from "../../entities/User";

import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  constructor(private model: Model<User>) {}

  async list(): Promise<User[]> {
    return await this.model.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.model.findOne({ email });
  }

  async findById(id: string): Promise<User | null> {
    return await this.model.findOne({ id: id });
  }

  async findToAuth(user: UserDTO): Promise<User | null> {
    return await this.model.findOne({
      email: user.email,
      password: user.password,
    });
  }

  async save(user: User): Promise<void> {
    await this.model.create(user);
  }

  async update(user: User): Promise<void> {
    await this.model.updateOne({ id: user.id }, user);
  }

  async delete(client: User): Promise<void> {
    await this.model.deleteOne({ id: client.id });
  }
}

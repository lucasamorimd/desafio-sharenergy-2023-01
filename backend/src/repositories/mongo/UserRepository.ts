import { Model } from "mongoose";
import { User } from "../../entities/User";
import { authType } from "../../types/authType";
import { ResponseUserType } from "../../types/ResponseUserType";
import { verifyToken } from "../../types/verifyTokenType";

import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  constructor(private model: Model<User>) {}

  async findByEmail(email: string): Promise<User | null> {
    return await this.model.findOne({ email });
  }

  async findById(id: string): Promise<User | null> {
    return await this.model.findOne({ id: id });
  }

  async findToAuth(data: authType): Promise<User | null> {
    return await this.model.findOne({
      userName: data.userName,
      password: data.password,
    });
  }

  async list(
    page: number = 1,
    perPage: number = 10
  ): Promise<ResponseUserType> {
    const skip = perPage * (page - 1);
    return {
      user: await this.model
        .find()
        .sort([["created_at", "descending"]])
        .skip(skip)
        .limit(perPage),
      total: await this.model.count(),
      page: page,
      perPage: perPage,
    };
  }

  async verifyToken(data: verifyToken): Promise<User | null> {
    return await this.model.findOne({ data });
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

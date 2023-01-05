import { Model, Schema, connection, model } from "mongoose";
import { User } from "../../../entities/User";
import { IMongoModel } from "./IMongoModel";

export default class UserModel implements IMongoModel {
  schema: Schema = new Schema<User>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  });

  modelName: string = "User";

  getModel(): Model<User> {
    return connection.models.User || model<User>(this.modelName, this.schema);
  }
}

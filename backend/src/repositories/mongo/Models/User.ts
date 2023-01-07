import { Model, Schema, connection, model } from "mongoose";
import { User } from "../../../entities/User";
import { IMongoModel } from "./IMongoModel";

export default class UserModel implements IMongoModel {
  schema: Schema = new Schema<User>({
    id: { type: String, required: true },
    userName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: {
      type: {
        day: Number,
        month: Number,
        year: Number,
        hour: Number,
        minutes: Number,
        seconds: Number,
      },
      required: true,
    },
  });

  modelName: string = "users";

  getModel(): Model<User> {
    return connection.models.users || model<User>(this.modelName, this.schema);
  }
}

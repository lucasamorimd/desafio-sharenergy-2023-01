import { Schema, model, connection, Model } from "mongoose";
import { Client } from "../../../entities/Client";
import { IMongoModel } from "./IMongoModel";

export default class ClientModel implements IMongoModel {
  schema: Schema = new Schema<Client>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    address: { type: String, required: true },
    document: { type: String, required: true },
  });

  modelName: string = "Client";

  getModel(): Model<Client> {
    return (
      connection.models.Client || model<Client>(this.modelName, this.schema)
    );
  }
}

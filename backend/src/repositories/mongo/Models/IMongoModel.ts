import { Model, Schema } from "mongoose";

export interface IMongoModel {
  schema: Schema;
  modelName: string;
  getModel(): Model<any>;
}

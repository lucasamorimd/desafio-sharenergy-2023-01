import { Model, Schema } from "mongoose";

interface IMongoModel {
  schema: Schema;
  modelName: string;
  getModel(): Model<any>;
}
export { IMongoModel };

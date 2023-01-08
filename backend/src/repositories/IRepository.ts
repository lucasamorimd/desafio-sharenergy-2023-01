import { IEntity } from "../entities/IEntity";

interface IRepository {

  save(cliente: IEntity): Promise<void>;
  update(cliente: IEntity): Promise<void>;
  delete(client: IEntity): Promise<void>;
}
export { IRepository };

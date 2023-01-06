import { IEntity } from "../entities/IEntity";

interface IRepository {
  list(page: number): Promise<IEntity[]>;
  save(cliente: IEntity): Promise<void>;
  update(cliente: IEntity): Promise<void>;
  delete(client: IEntity): Promise<void>;
}
export { IRepository };

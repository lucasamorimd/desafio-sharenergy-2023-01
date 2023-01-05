import { randomUUID } from "crypto";
import { IEntity } from "./IEntity";

export class Client implements IEntity {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public telephone!: string;
  public address!: string;
  public document!: string;

  constructor(props: Omit<Client, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
  }
}

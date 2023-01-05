import { randomUUID } from "crypto";
import { IEntity } from "./IEntity";

export class User implements IEntity {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
  }
}

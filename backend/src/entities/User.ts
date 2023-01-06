import { randomUUID } from "crypto";
import moment from "moment";
import { IEntity } from "./IEntity";

export class User implements IEntity {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public userName!: string;
  public password!: string;
  public created_at!: string;
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
    moment.locale(process.env.LOCALE);
    this.created_at = moment().format("L LTS");
  }
}

import { randomUUID } from "crypto";
import { getDate } from "../handlers/getDate";
import { Date } from "../types/date";
import { IEntity } from "./IEntity";

export class Client implements IEntity {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public telephone!: string;
  public address!: string;
  public document!: string;
  public created_at!: Date;

  constructor(props: Omit<Client, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
    console.log(this.created_at);
    if (!this.created_at) {
      const date = getDate();
      this.created_at = date;
    }
  }
}

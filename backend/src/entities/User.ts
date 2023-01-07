import { randomUUID } from "crypto";
import { getDate } from "../handlers/getDate";

import { Date } from "../types/date";

import { IEntity } from "./IEntity";

export class User implements IEntity {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public userName!: string;
  public password!: string;
  public created_at!: Date;
  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
    const date = new Date();
    if (!this.created_at) {
      this.created_at = getDate();
    }
  }
}

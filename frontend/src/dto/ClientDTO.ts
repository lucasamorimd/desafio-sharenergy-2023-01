import { Date } from "../types/Date";

interface ClientDTO {
  id?: string;
  name: string;
  email: string;
  telephone: string;
  address: string;
  document: string;
  created_at?: Date;
}

export type { ClientDTO };

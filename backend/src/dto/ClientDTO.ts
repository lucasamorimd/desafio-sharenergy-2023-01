import { Date } from "../types/date";

export interface ClientDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
  telephone: string;
  document: string;
  created_at: Date;
}
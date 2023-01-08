import { Client } from "../entities/Client";
import { ResponseType } from "./ResponseType";

interface ResponseClientType extends ResponseType {
  clients: Client[];
}
export { ResponseClientType };

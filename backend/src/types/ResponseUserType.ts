import { User } from "../entities/User";
import { ResponseType } from "./ResponseType";

interface ResponseUserType extends ResponseType {
  user: User[];
}
export { ResponseUserType };

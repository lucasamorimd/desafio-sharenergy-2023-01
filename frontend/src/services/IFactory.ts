import { IRequest } from "./Axios/Request";

interface IFactory {
  create(headers: boolean): IRequest;
}
export type { IFactory };

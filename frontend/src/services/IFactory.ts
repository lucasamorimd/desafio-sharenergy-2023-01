import { IRequest } from "./Axios/Request";

interface IFactory {
  create(): IRequest;
}
export type { IFactory };

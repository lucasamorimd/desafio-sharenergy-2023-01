import { IFactory } from "../IFactory";
import { IRequest, Request } from "./Request";
import { Client } from "./Client";

class AxiosFactory implements IFactory {
  constructor(private base_url: string) {}
  create(): IRequest {
    const client = new Client(this.base_url);
    return new Request(client);
  }
}

export { AxiosFactory };

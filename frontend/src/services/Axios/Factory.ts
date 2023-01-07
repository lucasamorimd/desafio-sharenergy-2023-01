import { IFactory } from "../IFactory";
import { IRequest, Request } from "./Request";
import { Client } from "./Client";
import axios from "axios";

class AxiosFactory implements IFactory {
  constructor(private base_url: string) {}
  create(): IRequest {
    const client = new Client(this.getInstance());
    return new Request(client);
  }
  getInstance() {
    let token =
      sessionStorage.getItem("token") || sessionStorage.getItem("token");
    const axiosInstace = axios.create({
      baseURL: this.base_url,
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    return axiosInstace;
  }
}

export { AxiosFactory };

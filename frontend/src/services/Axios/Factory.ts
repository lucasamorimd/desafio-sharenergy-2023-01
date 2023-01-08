import { IRequest, Request } from "./Request";
import { Client } from "./Client";
import axios from "axios";
import { IFactory } from "../IFactory";

class AxiosFactory implements IFactory {
  constructor(private base_url: string) {}
  create(withAuthorizationHeader: boolean = true): IRequest {
    const client = new Client(this.getInstance(withAuthorizationHeader));
    return new Request(client);
  }
  getInstance(withAuthorizationHeader: boolean) {
    let headers = {};
    if (withAuthorizationHeader) {
      let token =
        sessionStorage.getItem("token") || localStorage.getItem("token");
      headers = {
        Authorization: `Basic ${token}`,
      };
    }
    const axiosInstace = axios.create({
      baseURL: this.base_url,
      headers,
    });
    return axiosInstace;
  }
}

export { AxiosFactory };

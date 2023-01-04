import axios, { AxiosInstance } from "axios";
import { IClient, IParamsClient } from "../IClient";

class Client implements IClient {
  private client!: AxiosInstance;
  constructor(base_url: string) {
    this.client = axios.create({ baseURL: base_url });
  }
  async get(data: IParamsClient): Promise<any> {
    return await this.client.get(data.url, { params: data.params });
  }
  async post(data: IParamsClient): Promise<any> {
    return await this.client.post(data.url, data.params);
  }
  async put(data: IParamsClient): Promise<any> {
    return await this.client.put(data.url, data.params);
  }
  async delete(data: IParamsClient): Promise<any> {
    return await this.client.delete(data.url, data.params);
  }
}
export { Client };

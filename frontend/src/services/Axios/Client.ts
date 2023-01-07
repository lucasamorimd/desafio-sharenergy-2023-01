import { AxiosInstance } from "axios";
import { IClient, IParamsClient } from "../IClient";

class Client implements IClient {
  constructor(private client: AxiosInstance) {}
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
    let fullUrl = `${data.url}/${data.params}`;
    return await this.client.delete(fullUrl);
  }
}
export { Client };

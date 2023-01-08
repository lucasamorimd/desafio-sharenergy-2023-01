import { IClient } from "../IClient";

interface IRequest {
  get(url: string, data?: any): Promise<any>;
  post(url: string, data?: any): Promise<any>;
  put(url: string, data?: any): Promise<any>;
  delete(url: string, data?: any): Promise<any>;
}

class Request implements IRequest {
  constructor(private client: IClient) {}
  async get(url: string, data?: any): Promise<any> {
    let response = await this.client.get({ url: url, params: data });
    return response.data;
  }
  async post(url: string, data?: any): Promise<any> {
    let response = await this.client.post({ url: url, params: data });
    return response.data;
  }
  async put(url: string, data?: any): Promise<any> {
    let response = await this.client.put({ url: url, params: data });
    return response.data;
  }
  async delete(url: string, data?: any): Promise<any> {
    let response = await this.client.delete({ url: url, params: data });
    return response.data;
  }
}
export { Request };
export type { IRequest };

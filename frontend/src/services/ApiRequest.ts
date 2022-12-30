import { IService } from "./IService";

class ApiRequest {
  constructor(private clientService: IService) {}
  get(url: string, data?: any): Promise<any> {
    return this.clientService.get(url, data);
  }
  post(url: string, data?: any): Promise<any> {
    return this.clientService.post(url, data);
  }
  put(url: string, data?: any): Promise<any> {
    return this.clientService.put(url, data);
  }
  delete(url: string, data?: any): Promise<any> {
    return this.clientService.delete(url, data);
  }
}
export { ApiRequest };

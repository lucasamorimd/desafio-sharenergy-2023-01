import { IRequestService } from "./IRequestService";

class ApiRequest {
  constructor(private clientService: IRequestService) {}
  async get(url: string, data?: any) {
    let response = await this.clientService.get(url, { params: data });
    return response.data.results;
  }
  async post(url: string, data?: any) {
    let response = await this.clientService.post(url, data);
    return response.data.results;
  }
  async put(url: string, data?: any) {
    let response = await this.clientService.put(url, data);
    return response;
  }
  async delete(url: string, data?: any) {
    let response = await this.clientService.delete(url, data);
    return response.data.results;
  }
}
export { ApiRequest };

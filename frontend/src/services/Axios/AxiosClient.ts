import { IRequestService } from "../IRequestService";
import axios from "axios";

class AxiosClient implements IRequestService {
  async get(url: string, params: any = ""): Promise<any> {
    return await axios.get(url, params);
  }
  async post(url: string, params?: any): Promise<any> {
    return await axios.post(url, params);
  }
  async put(url: string, params?: any): Promise<any> {
    return await axios.put(url, params);
  }
  async delete(url: string, params?: any): Promise<any> {
    return await axios.delete(url, params);
  }
}
export { AxiosClient };

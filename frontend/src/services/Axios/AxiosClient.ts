import { IRequestService } from "../IRequestService";
import axios from "axios";
const clientAxios = axios.create();
class AxiosClient implements IRequestService {
  async get(url: string, params: any = ""): Promise<any> {
    return await clientAxios.get(url, params);
  }
  async post(url: string, params?: any): Promise<any> {
    return await clientAxios.post(url, params);
  }
  async put(url: string, params?: any): Promise<any> {
    return await clientAxios.put(url, params);
  }
  async delete(url: string, params?: any): Promise<any> {
    return await clientAxios.delete(url, params);
  }
}
export { AxiosClient };

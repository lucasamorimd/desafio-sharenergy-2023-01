import { IService } from "../IService";
import axios from "axios";

class AxiosClient implements IService {
  get(url: string, params: any = ""): Promise<any> {
    let fullUrl = url + encodeURI(params);
    return axios.get(fullUrl);
  }
  post(url: string, params?: any): Promise<any> {
    return axios.post(url, params);
  }
  put(url: string, params?: any): Promise<any> {
    return axios.put(url, params);
  }
  delete(url: string, params?: any): Promise<any> {
    return axios.delete(url, params);
  }
}
export { AxiosClient };

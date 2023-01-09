import { AxiosInstance } from "axios";
import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";
import { AuthResponseType } from "../../types/AuthResponseType";

class LoginActions {
  private requestApi: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async authenticate(
    userName: string,
    password: string
  ): Promise<AuthResponseType> {
    let params = { userName, password };
    try {
      let response = await this.requestApi.post("/login", params);

      return { data: response.data, message: response.message };
    } catch (err: any) {
      return { data: null, message: err.message };
    }
  }
}
export { LoginActions };

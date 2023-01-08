import { AxiosFactory } from "../services/Axios/Factory";
import { IRequest } from "../services/Axios/Request";

class ValidateToken {
  private requestApi!: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async validate(token: string) {
    try {
      let response = await this.requestApi.get("/validate-token");
      if (response.token !== token) {
        return false;
      }
      console.log("AQUI NO VALIDATE TOKEN", response);
      return true;
    } catch (err) {
      console.log("NO ERR DO VALIDATE TOKEN", err);
      return false;
    }
  }
}
export { ValidateToken };

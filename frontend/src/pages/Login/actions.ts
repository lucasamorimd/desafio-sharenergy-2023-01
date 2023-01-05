import { useContext } from "react";
import { Context } from "../../contexts/auth";
import { AuthDTO } from "../../dto/AuthDTO";
import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";

class LoginActions {
  private requestApi: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async authenticate(data: AuthDTO): Promise<AuthDTO> {
    try {
      let response = await this.requestApi.post("/login", data);
      return response;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
  verifyIsRemember() {
    const { state, dispatch } = useContext(Context);
    if (state.auth.remember_me) {
      return true;
    }
    return false;
  }
}
export { LoginActions };

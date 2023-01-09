import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/auth";
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
    const { logout } = useContext(Context);
    try {
      let response = await this.requestApi.get("/validate-token");
      if (response.token !== token) {
        throw new Error("Token inválido");
      }
      return true;
    } catch (err) {
      logout();
    }
  }
}
export { ValidateToken };

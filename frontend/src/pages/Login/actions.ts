import { useContext } from "react";
import { Context } from "../../contexts/auth";
import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";

class LoginActions {
  private requestApi: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async authenticate(data: {
    email: string;
    password: string;
    remember_me: boolean;
  }) {
    try {
      const { state, dispatch } = useContext(Context);
      let response = await this.requestApi.post("/login", data);
      if (response) {
        dispatch({
          type: "CHANGE_USER_NAME",
          payload: response.data.name,
        });
        dispatch({
          type: "CHANGE_USER_EMAIL",
          payload: response.data.email,
        });
        dispatch({
          type: "CHANGE_TOKEN",
          payload: response.data.token,
        });

        dispatch({
          type: "CHANGE_IS_LOGGED",
          payload: true,
        });

        dispatch({
          type: "CHANGE_REMEMBER_ME",
          payload: data.remember_me,
        });
      }
      return true;
    } catch (err: any) {
      return false;
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

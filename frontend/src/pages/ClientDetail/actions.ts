import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";

class ClientDetailActions {
  private requestApi!: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async getClient(id: string) {
    try {
      let response = await this.requestApi.get(`/client/${id}`);
      return { data: response.data, message: response.message };
    } catch (err: any) {
      return { data: null, message: err.message };
    }
  }
}
export { ClientDetailActions };

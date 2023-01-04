import { ClientDTO } from "../../dto/ClientDTO";
import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";

class ClientsActions {
  private requestApi!: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async getClientList() {
    try {
      let response = await this.requestApi.get("/client/list");
      return response;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
  async createClient(client: ClientDTO) {
    try {
      let response = await this.requestApi.post("/client/create", client);
      return response.message;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
}
export { ClientsActions };

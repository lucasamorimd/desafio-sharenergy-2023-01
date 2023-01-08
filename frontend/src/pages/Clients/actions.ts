import { ClientDTO } from "../../dto/ClientDTO";
import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";
import {
  ClientResponseType,
  DataResponse,
} from "../../types/ClientResponseType";

class ClientsActions {
  private requestApi!: IRequest;
  constructor() {
    const base_url = "http://localhost:5000";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  async getClientList(page: number): Promise<DataResponse> {
    try {
      let response = await this.requestApi.get("/client/list", {
        page: page,
        perPage: 10,
      });
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

  async updateClient(client: ClientDTO) {
    try {
      let response = await this.requestApi.put("/client/update", client);
      return response.message;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
  async deleteClient(client: ClientDTO) {
    try {
      let response = await this.requestApi.delete("/client/delete", client.id);
      return response.message;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
}
export { ClientsActions };

import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";

class RandomDogsActions {
  private requestApi!: IRequest;
  constructor() {
    const base_url = "https://random.dog";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create(false);
  }

  async getRandomDog(url: string) {
    return await this.requestApi.get(url, { include: "jpg,gif" });
  }
}
export { RandomDogsActions };
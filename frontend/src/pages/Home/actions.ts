import { UserDTO } from "../../dto/UserDTO";
import { AxiosFactory } from "../../services/Axios/Factory";
import { IRequest } from "../../services/Axios/Request";

class HomeActions {
  private requestApi!: IRequest;
  constructor() {
    const base_url =
      import.meta.env.VITE_RANDOM_USER_API || "https://randomuser.me";
    const clientFactory = new AxiosFactory(base_url);
    this.requestApi = clientFactory.create();
  }
  filterUsers(users: UserDTO[], search: string): UserDTO[] {
    return users.filter((user) => {
      let fullName = `${user.name.first} ${user.name.last}`;
      return (
        user.name.first.toLowerCase().includes(search.toLocaleLowerCase()) ||
        user.name.last.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.login.username.toLowerCase().includes(search.toLowerCase()) ||
        fullName.toLowerCase().includes(search.toLowerCase())
      );
    });
  }
  async getUsers(page: number): Promise<any> {
    return await this.requestApi.get("/api", {
      page: page,
      results: 10,
      seed: "abc",
    });
  }
}
export { HomeActions };

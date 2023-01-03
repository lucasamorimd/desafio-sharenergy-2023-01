import { UserDTO } from "../dto/UserDTO";
import { axiosRequest } from "../services/Axios/Factory";

async function Search(key: string, totalPages: number): Promise<UserDTO[]> {
  let keySearch = key.toLowerCase();
  let { data } = await axiosRequest.get("https://randomuser.me/api/", {
    seed: "sharenergy",
    results: 5 * totalPages,
  });
  let filteredUsers = data.results.filter((item: UserDTO) => {
    let fullName = `${item.name.first} ${item.name.last}`;
    return (
      item.name.first.toLowerCase() == keySearch ||
      item.name.last.toLowerCase() == keySearch ||
      item.email.toLowerCase() == keySearch ||
      item.login.username.toLowerCase() == keySearch ||
      fullName.toLowerCase() == keySearch
    );
  });
  console.log(filteredUsers);
  return filteredUsers;
}
export { Search };

import { UserDTO } from "../dto/UserDTO";
import { Buffer } from "buffer";
import { User } from "../entities/User";

const CreateUserToken = (user: User) => {
  return Buffer.from(
    JSON.stringify({
      email: user.email,
      name: user.name,
      userName: user.userName,
    })
  ).toString("base64");
};

export { CreateUserToken };

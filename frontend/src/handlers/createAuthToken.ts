import { AuthDTO } from "../dto/AuthDTO";
import { Buffer } from "buffer";
const createAuthToken = (user: AuthDTO) => {
  return Buffer.from(
    JSON.stringify({
      email: user.email,
      name: user.userName,
      userName: user.userNickName,
    })
  ).toString("base64");
};

export { createAuthToken };

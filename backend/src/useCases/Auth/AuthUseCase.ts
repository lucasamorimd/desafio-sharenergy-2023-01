import { UserDTO } from "../../dto/UserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Buffer } from "buffer";
import { authType } from "../../types/authType";
export class AuthUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: authType): Promise<UserDTO> {
    const user = await this.userRepository.findToAuth(data);

    if (user === null) {
      throw new Error("User not found");
    }

    const hash = Buffer.from(
      JSON.stringify({
        name: user.name,
        email: user.email,
        userName: user.userName,
      })
    ).toString("base64");

    const authUser: UserDTO = {
      email: user.email,
      userName: user.name,
      userNickName: user.userName,
      token: hash,
    };
    return authUser;
  }
}

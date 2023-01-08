import { UserDTO } from "../../dto/UserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Buffer } from "buffer";
import { authType } from "../../types/authType";
import { createUserToken } from "../../handlers/createUserToken";
export class AuthUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: authType): Promise<UserDTO> {
    const user = await this.userRepository.findToAuth(data);

    if (user === null) {
      throw new Error("User or password incorrect");
    }

    const hash = createUserToken(user);

    const authUser: UserDTO = {
      email: user.email,
      userName: user.name,
      userNickName: user.userName,
      token: hash,
      created_at: user.created_at,
    };
    return authUser;
  }
}

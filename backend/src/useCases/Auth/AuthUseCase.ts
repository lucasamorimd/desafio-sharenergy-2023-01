import { UserDTO } from "../../dto/UserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class AuthUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: UserDTO): Promise<UserDTO> {
    const user = await this.userRepository.findToAuth(data);
    if (user === null) {
      throw new Error("User not found");
    }
    const hash = Buffer.from(JSON.stringify(user), "base64").toString();
    const authUser: UserDTO = {
      email: user.email,
      name: user.name,
      token: hash,
    };
    return authUser;
  }
}

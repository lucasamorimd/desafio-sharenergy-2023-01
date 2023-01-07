import { Date } from "../types/date";

export interface UserDTO {
  userName: string;
  email: string;
  token: string;
  userNickName: string;
  created_at: Date;
}

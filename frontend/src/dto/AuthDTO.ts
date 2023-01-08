import { Date } from "../types/Date";

interface AuthDTO {
  userName: string;
  email: string;
  token: string;
  userNickName: string;
  created_at?: Date;
}
export type { AuthDTO };

import { AuthDTO } from "../dto/AuthDTO";

type AuthResponseType = {
  data: AuthDTO | null;
  message: string;
};
export type { AuthResponseType };

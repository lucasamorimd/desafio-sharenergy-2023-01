import { reducerActionType } from "../types/reducerActionType";

type AuthType = {
  user_name: string;
  user_email: string;
  token: string;
  is_logged: boolean;
  remember_me: boolean;
};

const authInitialState: AuthType = {
  user_name: "",
  user_email: "",
  token: "",
  is_logged: false,
  remember_me: false,
};

const authReducer = (state: AuthType, action: reducerActionType) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return { ...state, user_name: action.payload.user_name };
      break;
    case "CHANGE_USER_EMAIL":
      return { ...state, user_email: action.payload.user_email };
      break;
    case "CHANGE_TOKEN":
      return { ...state, token: action.payload.token };
      break;
    case "CHANGE_IS_LOGGED":
      return { ...state, is_logged: action.payload.is_logged };
      break;
    case "CHANGE_REMEMBER_ME":
      return { ...state, remember_me: action.payload.remember_me };
      break;
  }
  return state;
};

export type { AuthType };
export { authInitialState, authReducer };

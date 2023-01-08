import { AuthType } from "../types/AuthType";
import { reducerActionType } from "../types/reducerActionType";

const getAuthInitialState = <AuthType>() => {
  let user = sessionStorage.getItem("user") || localStorage.getItem("user");
  if (!user) {
    return {
      userName: "",
      userNickName: "",
      userEmail: "",
      token: "",
      isLogged: false,
      rememberMe: false,
    };
  }
  return JSON.parse(user);
};

const authInitialState: AuthType = getAuthInitialState();

const authReducer = (state: AuthType, action: reducerActionType) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return { ...state, userName: action.payload.userName };
      break;
    case "CHANGE_USER_NICKNAME":
      return { ...state, userNickName: action.payload.userNickName };
      break;
    case "CHANGE_USER_EMAIL":
      return { ...state, userEmail: action.payload.userEmail };
      break;
    case "CHANGE_TOKEN":
      return { ...state, token: action.payload.token };
      break;
    case "CHANGE_IS_LOGGED":
      return { ...state, isLogged: action.payload.isLogged };
      break;
    case "CHANGE_REMEMBER_ME":
      return { ...state, rememberMe: action.payload.rememberMe };
      break;
  }
  return state;
};
export { authInitialState, authReducer };

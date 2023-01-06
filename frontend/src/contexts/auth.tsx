import { createContext, useReducer } from "react";
import { Navigate } from "react-router-dom";
import { authReducer, authInitialState } from "../reducers/userReducer";
import { authType } from "../types/authType";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
  auth: authType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
  logout: Function;
};

const initialState = {
  auth: authInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
  logout: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  auth: authReducer(state.auth, action),
});

export const ContextProvider: React.FC = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const logout = () => {
    dispatch({
      type: "CHANGE_USER_NAME",
      payload: { userName: "" },
    });
    dispatch({
      type: "CHANGE_USER_NICKNAME",
      payload: { userNickName: "" },
    });
    dispatch({
      type: "CHANGE_USER_EMAIL",
      payload: { userEmail: "" },
    });
    dispatch({
      type: "CHANGE_TOKEN",
      payload: { token: "" },
    });
    dispatch({
      type: "CHANGE_IS_LOGGED",
      payload: { isLogged: false },
    });
    dispatch({
      type: "CHANGE_REMEMBER_ME",
      payload: { rememberMe: false },
    });
    sessionStorage.clear();
    localStorage.clear();
    return <Navigate to="/login" />;
  };
  return (
    <Context.Provider value={{ state, dispatch, logout }}>
      {children}
    </Context.Provider>
  );
};

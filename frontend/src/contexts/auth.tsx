import { createContext, useReducer } from "react";
import {
  authReducer,
  authInitialState,
  AuthType,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
  auth: AuthType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  auth: authInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  auth: authReducer(state.auth, action),
});

export const ContextProvider: React.FC = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

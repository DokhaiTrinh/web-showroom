import loginReducer, { LoginState } from "redux/slices/login";
import registerReducer, { RegisterState } from "redux/slices/register";
import globalReducer, { GlobalState } from "redux/slices/global";
import { Reducer } from "react";
import { AnyAction } from "redux";

export type RootState = {
  login: Reducer<LoginState, AnyAction>;
  register: Reducer<RegisterState, AnyAction>;
  global: Reducer<GlobalState, AnyAction>;
};

const rootReducer: RootState = {
  login: loginReducer,
  register: registerReducer,
  global: globalReducer,
};

export default rootReducer;

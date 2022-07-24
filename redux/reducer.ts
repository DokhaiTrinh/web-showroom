import loginReducer, { LoginState } from "redux/slices/login";
import globalReducer, { GlobalState } from "redux/slices/global";
import { Reducer } from "react";
import { AnyAction } from "redux";

export type RootState = {
  login: Reducer<LoginState, AnyAction>;
  global: Reducer<GlobalState, AnyAction>;
};

const rootReducer: RootState = {
  login: loginReducer,
  global: globalReducer,
};

export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";

export type RegisterState = {
  username?: string;
  email?: string;
  phone?: string;
  fullname?: string;
  password?: string;
  loading: boolean;
};

const initialState: RegisterState = {
  loading: false,
};

const slice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    register: (state, action) => {},
  },
});

const { actions, reducer } = slice;
const { register } = actions;

export { register };
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  username?: string;
  password?: string;
  loading: boolean;
}

const initialState: InitialState = {
  loading: false
}

const slice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login: (state, action) => {}
  }
});

const { actions, reducer } = slice;
const { login } = actions;

export { login };
export default reducer;
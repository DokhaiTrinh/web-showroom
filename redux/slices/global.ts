import { createSlice } from "@reduxjs/toolkit";

export type GlobalState = {
  showLoginModal: boolean;
  showRegisterModal: boolean;
};

const initialState: GlobalState = {
  showLoginModal: false,
  showRegisterModal: false
};

const slice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    toggleShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },
    toggleShowRegisterModal: (state, action) => {
      state.showRegisterModal = action.payload;
    }
  },
});

const { actions, reducer } = slice;
const { toggleShowLoginModal } = actions;
const { toggleShowRegisterModal } = actions;
export { toggleShowLoginModal };
export { toggleShowRegisterModal };
export default reducer;

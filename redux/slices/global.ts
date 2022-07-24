import { createSlice } from "@reduxjs/toolkit";

export type GlobalState = {
  showLoginModal: boolean;
};

const initialState: GlobalState = {
  showLoginModal: false,
};

const slice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    toggleShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },
  },
});

const { actions, reducer } = slice;
const { toggleShowLoginModal } = actions;

export { toggleShowLoginModal };
export default reducer;

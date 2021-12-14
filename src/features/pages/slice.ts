import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export interface IState {
  current: string;
}

const initialState: IState = {
  current: "home",
};

export const slice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { setPage } = slice.actions;

export const selectPage = (state: RootState) => state.pages.current;

export default slice.reducer;

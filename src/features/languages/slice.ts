import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export type Languages = "en" | "es";

export interface IState {
  current: Languages;
}

const initialState: IState = {
  current: "en",
};

export const slice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Languages>) => {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = slice.actions;

export const selectLanguage = (state: RootState) => state.languages.current;

export default slice.reducer;

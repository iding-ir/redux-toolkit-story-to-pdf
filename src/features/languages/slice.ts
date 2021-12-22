import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import getLanguage from "../../components/Language/getLanguage";

export interface IState {
  current: string;
}

const initialState: IState = {
  current: getLanguage().iLanguage,
};

export const slice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = slice.actions;

export const selectLanguage = (state: RootState) => state.languages.current;

export default slice.reducer;

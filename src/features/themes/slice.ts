import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

import { RootState } from "../../app/store";

export interface IState {
  mode: PaletteMode;
}

const initialState: IState = {
  mode: "dark",
};

export const slice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<PaletteMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = slice.actions;

export const selectMode = (state: RootState) => state.themes.mode;

export default slice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export interface IState {
  keyword: string;
  type: string;
}

const initialState: IState = {
  keyword: "",
  type: "author",
};

export const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { setKeyword, setType } = slice.actions;

export const selectKeyword = (state: RootState) => state.search.keyword;
export const selectType = (state: RootState) => state.search.type;

export default slice.reducer;

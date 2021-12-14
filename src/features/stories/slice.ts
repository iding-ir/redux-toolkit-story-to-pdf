import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "../../app/store";
import { IStory } from "../../types";

const id = uuidv4();

export interface IState {
  all: { [keys: string]: IStory };
}

const initialState: IState = {
  all: {
    [id]: {
      id,
      title: "Title",
      author: "Author",
      content: "Content",
    },
  },
};

export const slice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    createStory: (state, action: PayloadAction<IStory>) => {
      state.all = { ...state.all, [action.payload.id]: action.payload };
    },
    deleteStory: (state, action: PayloadAction<string>) => {
      delete state.all[action.payload];
    },
    editStory: (state, action: PayloadAction<IStory>) => {
      state.all[action.payload.id] = action.payload;
    },
  },
});

export const { createStory, deleteStory, editStory } = slice.actions;

export const selectStories = (state: RootState) => state.stories.all;

export default slice.reducer;

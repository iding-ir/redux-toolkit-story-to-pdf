import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "../../app/store";
import { IStory, IStories } from "../../types";

const id = uuidv4();

export interface IState {
  all: IStories;
}

const initialState: IState = {
  all: {
    [id]: {
      id,
      title: "Hello world!",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

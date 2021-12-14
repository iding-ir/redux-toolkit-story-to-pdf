import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "../../app/store";
import { IStory, IStories } from "../../types";
import { getStories } from "./api";

const id = uuidv4();

export interface IState {
  all: IStories;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
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
  status: "idle",
  error: null,
};

export const fetchStories = createAsyncThunk("stories/getStories", async () => {
  const data = await getStories();

  return data.reduce((total: IStories, current: IStory) => {
    return { ...total, [current.id]: current };
  }, {});
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.all = action.payload;
      });
  },
});

export const { createStory, deleteStory, editStory } = slice.actions;

export const selectStories = (state: RootState) => state.stories.all;
export const selectStoriesStatus = (state: RootState) => state.stories.status;

export default slice.reducer;

import { SxProps, Theme } from "@mui/material/styles";

export interface IStory {
  id: string;
  title: string;
  author: string;
  content: string;
  [key: string]: string;
}

export interface IStories {
  [key: string]: IStory;
}

export interface Styles {
  [key: string]: SxProps<Theme>;
}

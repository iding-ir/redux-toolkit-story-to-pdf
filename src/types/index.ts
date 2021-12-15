import { ReactElement, JSXElementConstructor } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface IRoute {
  key: string;
  path: string;
  element: ReactElement<any, string | JSXElementConstructor<any>>;
  navbar: boolean;
  title?: string;
}

export interface IRoutes {
  [key: string]: IRoute;
}

export interface IStory {
  id: string;
  title: string;
  author: string;
  content: string;
  [key: string]: string;
}

export interface IStories {
  [keys: string]: IStory;
}

export interface Styles {
  [key: string]: SxProps<Theme>;
}

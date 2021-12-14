import { ReactElement, JSXElementConstructor } from "react";

import Home from "../Home/Home";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";
import Story from "../Story/Story";

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

export const routes: IRoutes = {
  home: {
    key: "home",
    path: "/",
    element: <Home />,
    navbar: true,
    title: "Navbar.home",
  },
  create: {
    key: "create",
    path: "/create",
    element: <Create />,
    navbar: true,
    title: "Navbar.create",
  },
  edit: {
    key: "edit",
    path: "/edit/:id",
    element: <Edit />,
    navbar: false,
  },
  story: {
    key: "story",
    path: "/story/:id",
    element: <Story />,
    navbar: false,
  },
};

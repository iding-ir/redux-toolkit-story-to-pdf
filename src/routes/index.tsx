import { IRoutes } from "../types";
import Home from "../components/Home/Home";
import Create from "../components/Create/Create";
import Edit from "../components/Edit/Edit";
import Story from "../components/Story/Story";

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

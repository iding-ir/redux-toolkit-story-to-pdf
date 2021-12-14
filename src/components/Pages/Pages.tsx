import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import { routes, IRoute } from "./routes";

const Pages = () => {
  const renderRoutes = () => {
    return Object.values(routes).map(({ path, element }: IRoute) => {
      return <Route key={path} path={path} element={element} />;
    });
  };

  return (
    <>
      <CssBaseline />

      <Layout>
        <Routes>{renderRoutes()}</Routes>
      </Layout>
    </>
  );
};

export default Pages;

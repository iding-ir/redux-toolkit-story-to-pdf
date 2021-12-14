import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { styles } from "./styles";
import { routes, IRoute } from "../Pages/routes";
import { selectPage, setPage } from "../../features/pages/slice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(selectPage);

  const handleClick = (key: string) => {
    dispatch(setPage(key));
  };

  const renderTabs = () => {
    return Object.values(routes).map(({ key, path, title, navbar }: IRoute) => {
      return (
        navbar && (
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={styles.link}
            data-selected={page === key}
            key={key}
          >
            <Link to={path} onClick={() => handleClick(key)}>
              <Trans i18nKey={title} />
            </Link>
          </Typography>
        )
      );
    });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {renderTabs()}

        <Box sx={styles.pusher} />

        <Theme />

        <Language />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { routes } from "../../routes";
import { IRoute } from "../../types";
import { styles } from "./styles";

const Tabs = () => {
  const { t } = useTranslation();

  return (
    <>
      {Object.values(routes).map(({ key, path, title, navbar }: IRoute) => {
        return (
          navbar &&
          title && (
            <Typography
              key={key}
              variant="h6"
              noWrap
              component="div"
              sx={styles.link}
            >
              <NavLink
                className={({ isActive }) => (isActive ? "is-selected" : "")}
                end
                to={path}
              >
                {t(title)}
              </NavLink>
            </Typography>
          )
        );
      })}
    </>
  );
};

export default Tabs;

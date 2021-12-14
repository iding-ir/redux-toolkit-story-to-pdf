import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { routes, IRoute } from "../Pages/routes";
import { selectPage, setPage } from "../../features/pages/slice";
import { styles } from "./styles";

const Tabs = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const page = useAppSelector(selectPage);

  const handleClick = (key: string) => {
    dispatch(setPage(key));
  };

  return (
    <>
      {Object.values(routes).map(({ key, path, title, navbar }: IRoute) => {
        return (
          navbar && (
            <Typography
              key={key}
              variant="h6"
              noWrap
              component="div"
              sx={styles.link}
              data-selected={page === key}
            >
              <Link to={path} onClick={() => handleClick(key)}>
                {t(title as string)}
              </Link>
            </Typography>
          )
        );
      })}
    </>
  );
};

export default Tabs;

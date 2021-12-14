import { ChangeEvent } from "react";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import { PaletteMode } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setMode, selectMode } from "../../features/themes/slice";
import { styles } from "./styles";

const Theme = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const mode = useAppSelector(selectMode);

  return (
    <Switch
      inputProps={{ "aria-label": t("Navbar.theme") }}
      checked={mode === "dark"}
      sx={styles.switch}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const mode = (event.target.checked ? "dark" : "light") as PaletteMode;

        dispatch(setMode(mode));
      }}
    />
  );
};

export default Theme;

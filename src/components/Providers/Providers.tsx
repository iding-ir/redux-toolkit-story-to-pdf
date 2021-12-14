import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../features/themes/slice";
import { getTheme } from "../Theme/getTheme";
import { useDialog, DialogContext } from "../Dialog/useDialog";
import { useSnackbar, SnackbarContext } from "../Snackbar/useSnackbar";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  const mode = useAppSelector(selectMode);
  const theme = getTheme(mode);

  const dialogValues = useDialog();
  const snackbarValues = useSnackbar();

  return (
    <HelmetProvider>
      <SnackbarContext.Provider value={snackbarValues}>
        <DialogContext.Provider value={dialogValues}>
          <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>
        </DialogContext.Provider>
      </SnackbarContext.Provider>
    </HelmetProvider>
  );
};

export default Providers;

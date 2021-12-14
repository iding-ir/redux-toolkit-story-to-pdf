import { useState, createContext, ReactNode } from "react";
import { AlertColor } from "@mui/material";

export interface SnackbarOptions {
  open: boolean;
  button: string;
  message: ReactNode;
  severity?: AlertColor;
  duration?: number;
}

const iSnackbar: SnackbarOptions = {
  open: false,
  button: "",
  message: "",
  severity: undefined,
  duration: 6000,
};

interface ISnackbarContext {
  snackbar: SnackbarOptions;
  setSnackbar: (snackbar: SnackbarOptions) => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  snackbar: iSnackbar,
  setSnackbar: () => {},
});

export const useSnackbar = () => {
  const [snackbar, setSnackbar] = useState(iSnackbar);

  return { snackbar, setSnackbar };
};

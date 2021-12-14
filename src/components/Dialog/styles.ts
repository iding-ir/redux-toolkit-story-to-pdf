import { Styles } from "../../types";

export const styles: Styles = {
  title: {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[50],
  },
  content: {
    minWidth: {
      sm: "320px",
      md: "480px",
    },
  },
  actions: {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[50],
  },
};

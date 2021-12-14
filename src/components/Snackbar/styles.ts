import { Styles } from "../../types";

export const styles: Styles = {
  content: {
    minWidth: {
      sm: "320px",
      md: "480px",
    },
  },
  alert: {
    width: "100%",
  },
  button: {
    color: (theme) => theme.palette.grey[100],
  },
};

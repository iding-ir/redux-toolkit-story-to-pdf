import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    textOverflow: "unset",
    flexShrink: "0",
    display: "flex",
    a: {
      padding: "0 1rem",
      color: (theme) => theme.palette.secondary.main,
      textDecoration: "none",
      fontSize: "1rem",
      "&.is-selected": {
        borderRadius: "4px",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(225, 225, 225, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

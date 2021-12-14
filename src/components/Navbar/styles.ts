import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    textOverflow: "unset",
    flexShrink: "0",
    '&[data-selected="true"]': {
      borderRadius: "4px",
      backgroundColor: (theme) =>
        theme.palette.mode === "dark"
          ? "rgba(225, 225, 225, 0.1)"
          : "rgba(0, 0, 0, 0.1)",
    },
    a: {
      padding: "0 1rem",
      color: (theme) => theme.palette.secondary.main,
      textDecoration: "none",
      fontSize: "1rem",
    },
  },
  wrapper: {
    display: "flex",
  },
  pusher: {
    width: "100%",
    flexShrink: "10",
  },
};

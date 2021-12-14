import { Styles } from "../../types";

export const styles: Styles = {
  link: {
    a: {
      color: (theme) => theme.palette.text.primary,
      fontSize: "1rem",
    },
  },
  thumbnail: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", sm: "calc(50% - 2rem)", md: "calc(25% - 2rem)" },
    backgroundColor: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : theme.palette.grey[50],
  },
  content: {
    flexGrow: 1,
  },
  author: {
    fontSize: "0.9rem",
    color: (theme) => theme.palette.text.secondary,
  },
  actions: {
    borderTop: "1px solid rgba(130, 130, 130, 0.2)",
  },
  pusher: {
    width: "100%",
    flexShrink: "10",
  },
};

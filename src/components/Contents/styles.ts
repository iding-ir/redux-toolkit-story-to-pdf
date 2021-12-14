import { Styles } from "../../types";

export const styles: Styles = {
  wrapper: {},
  container: {},
  header: {
    width: "100%",
    paddingBottom: "1rem",
    marginBottom: "1rem",
    borderBottom: "rgba(130, 130, 130, 0.4) 1px solid",
  },
  title: {
    color: (theme) => theme.palette.primary.main,
  },
  author: {
    color: (theme) => theme.palette.text.secondary,
  },
  content: {
    color: (theme) => theme.palette.text.secondary,
    margin: "1rem 0",
  },
};

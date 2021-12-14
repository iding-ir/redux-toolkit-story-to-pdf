import { Styles } from "../../types";

export const styles: Styles = {
  search: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem",
  },
  keyword: {
    width: {
      xs: "calc(100% - 120px)",
      md: "calc(100% - 180px)",
      lg: "calc(100% - 240px)",
    },
    marginRight: "0.5rem",
  },
  type: {
    width: {
      xs: "120px",
      md: "180px",
      lg: "240px",
    },
    marginLeft: "0.5rem",
  },
};

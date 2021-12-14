import { Styles } from "../../types";

export const styles: Styles = {
  switch: {
    "& .MuiSwitch-switchBase": {
      margin: "3px 4px",
      padding: 0,
      transform: "translateX(0)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(18px)",
        "& .MuiSwitch-thumb:before": {
          backgroundSize: 32,
          backgroundImage: "url('/assets/images/icon-dark.svg')",
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundSize: 32,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url('/assets/images/icon-light.svg')",
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  },
};

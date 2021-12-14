import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

import { primary, secondary, grey } from "./colors";

const iThemeLight = createTheme({ palette: { mode: "light" } });
const iThemeDark = createTheme({ palette: { mode: "dark" } });

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            backgroundColor:
              mode === "dark"
                ? iThemeLight.palette.grey[900]
                : iThemeLight.palette.grey[50],
          },
          multiline: {
            backgroundColor:
              mode === "dark"
                ? iThemeLight.palette.grey[900]
                : iThemeLight.palette.grey[50],
          },
        },
      },
    },
    palette: {
      mode,
      primary: {
        light: primary[400],
        main: primary[600],
        dark: primary[800],
        contrastText: grey[50],
      },
      secondary: {
        light: secondary[400],
        main: secondary[600],
        dark: secondary[800],
        contrastText: grey[900],
      },
      background: {
        default:
          mode === "dark"
            ? iThemeDark.palette.background.paper
            : iThemeLight.palette.grey[100],
      },
    },
  });
};

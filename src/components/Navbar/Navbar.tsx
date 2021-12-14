import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import Tabs from "../Tabs/Tabs";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Tabs />

        <Box sx={styles.pusher} />

        <Theme />

        <Language />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

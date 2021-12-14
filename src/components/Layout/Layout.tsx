import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Navbar from "../Navbar/Navbar";
import Dialog from "../Dialog/Dialog";
import Snackbar from "../Snackbar/Snackbar";
import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box sx={styles.wrapper}>
      <Navbar />

      <Box component="main" sx={styles.main}>
        <Toolbar />

        {children}
      </Box>

      <Dialog />

      <Snackbar />
    </Box>
  );
}

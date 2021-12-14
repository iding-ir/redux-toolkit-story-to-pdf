import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styles } from "./styles";

const NotFound = () => {
  return (
    <>
      <Typography variant="h5" component="div">
        <Trans i18nKey="NotFound.notFound" />
      </Typography>

      <Typography variant="h6" component="div">
        <Box sx={styles.link}>
          <Link to="/">
            <Trans i18nKey="NotFound.goBack" />
          </Link>
        </Box>
      </Typography>
    </>
  );
};

export default NotFound;

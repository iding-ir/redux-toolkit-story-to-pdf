import { Typography } from "@mui/material";
import { Trans } from "react-i18next";
import { FieldError } from "react-hook-form/dist/";

import { styles } from "./styles";

interface Props {
  error: FieldError;
  field: string;
}

const Error = ({ error, field }: Props) => {
  return (
    <>
      {error?.type === "required" && (
        <Typography color="error" sx={styles.error} variant="overline">
          <Trans i18nKey="Error.required" values={{ field }} />
        </Typography>
      )}
    </>
  );
};

export default Error;

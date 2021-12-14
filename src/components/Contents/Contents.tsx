import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";

import { IStory } from "../../types";
import Download from "../Download/Download";
import { styles } from "./styles";

interface Props {
  story: IStory;
}

const Contents = ({ story }: Props) => {
  const { title, author, content } = story;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.title} variant="h6" component="h6">
          {title.toUpperCase()}
        </Typography>

        <Typography sx={styles.author} variant="subtitle2" component="p">
          <Trans i18nKey="Content.author" values={{ author }} />
        </Typography>
      </Box>

      <Box sx={styles.content}>
        <Typography gutterBottom>{content}</Typography>
      </Box>

      <Download story={story} />
    </Box>
  );
};

export default Contents;

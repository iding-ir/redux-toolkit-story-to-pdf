import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "../../app/hooks";
import { selectStories } from "../../features/stories/slice";
import NotFound from "../NotFound/NotFound";
import Contents from "../Contents/Contents";
import Head from "../Head/Head";
import { styles } from "./styles";

const Story = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const story = useAppSelector(selectStories)[id as string];

  return (
    <Box sx={styles.story}>
      {story === undefined ? (
        <>
          <Head title={t("Title.notFound")} />

          <NotFound />
        </>
      ) : (
        <>
          <Head title={t("Title.story", { title: story?.title })} />

          <Contents story={story} />
        </>
      )}
    </Box>
  );
};

export default Story;

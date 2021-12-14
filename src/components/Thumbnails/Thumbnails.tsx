import Box from "@mui/material/Box";

import { useAppSelector } from "../../app/hooks";
import { selectStories } from "../../features/stories/slice";
import { selectKeyword, selectType } from "../../features/search/slice";
import Thumbnail from "../Thumbnail/Thumbnail";
import { IStory } from "../../types";
import { styles } from "./styles";

const Thumbnails = () => {
  const stories = useAppSelector(selectStories);
  const keyword = useAppSelector(selectKeyword);
  const type = useAppSelector(selectType);

  const getFilteredStories = (stories: IStory[]) => {
    return stories.filter(
      (story: IStory) =>
        story[type]?.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
  };

  return (
    <Box sx={styles.stories}>
      {getFilteredStories(Object.values(stories)).map((story: IStory) => (
        <Thumbnail key={story.id} story={story} />
      ))}
    </Box>
  );
};

export default Thumbnails;

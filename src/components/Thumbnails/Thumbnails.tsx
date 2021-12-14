import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectStories,
  selectStoriesStatus,
  fetchStories,
} from "../../features/stories/slice";
import { selectKeyword, selectType } from "../../features/search/slice";
import Thumbnail from "../Thumbnail/Thumbnail";
import { IStory } from "../../types";
import { styles } from "./styles";

const Thumbnails = () => {
  const dispatch = useAppDispatch();

  const stories = useAppSelector(selectStories);
  const storiesStatus = useAppSelector(selectStoriesStatus);
  const keyword = useAppSelector(selectKeyword);
  const type = useAppSelector(selectType);

  useEffect(() => {
    if (storiesStatus === "idle") {
      dispatch(fetchStories());
    }
  }, [storiesStatus, dispatch]);

  const getFilteredStories = (stories: IStory[]) => {
    return stories.filter(
      (story: IStory) =>
        story[type]?.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
  };

  return (
    <Box sx={styles.stories}>
      {storiesStatus === "loading" ? (
        <CircularProgress sx={styles.loader} />
      ) : (
        getFilteredStories(Object.values(stories)).map((story: IStory) => (
          <Thumbnail key={story.id} story={story} />
        ))
      )}
    </Box>
  );
};

export default Thumbnails;

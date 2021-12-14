import { useContext } from "react";
import { useTranslation, Trans } from "react-i18next";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";

import { useAppDispatch } from "../../app/hooks";
import { deleteStory } from "../../features/stories/slice";
import { DialogContext } from "../Dialog/useDialog";
import { IStory } from "../../types";
import { styles } from "./styles";
import { SnackbarContext } from "../Snackbar/useSnackbar";

interface Props {
  story: IStory;
}

const Thumbnail = ({ story }: Props) => {
  const { id, title, author } = story;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const { setDialog } = useContext(DialogContext);

  const handleEdit = async () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    dispatch(deleteStory(id));

    setSnackbar({
      ...snackbar,
      open: true,
      button: t("Snackbar.close"),
      message: t("Delete.success"),
      severity: "success",
    });
  };

  return (
    <Card sx={styles.thumbnail} key={id}>
      <CardContent sx={styles.content}>
        <Typography variant="h6" component="div">
          <Box sx={styles.link}>
            <Link to={`/story/${id}`}>{title.toUpperCase()}</Link>
          </Box>
        </Typography>

        <Typography sx={styles.author} gutterBottom>
          <Trans i18nKey="Story.author" values={{ author }} />
        </Typography>
      </CardContent>

      <CardActions sx={styles.actions}>
        <Tooltip title={<Trans i18nKey="Story.edit" />}>
          <IconButton color="primary" size="small" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Box sx={styles.pusher} />

        <Tooltip title={<Trans i18nKey="Story.delete" />}>
          <IconButton
            color="warning"
            size="small"
            onClick={() => {
              setDialog({
                open: true,
                title: t("Dialog.title"),
                content: (
                  <Trans
                    i18nKey="Dialog.content"
                    values={{ title: title.toUpperCase() }}
                    components={{ p: <p /> }}
                  />
                ),
                submit: t("Dialog.delete"),
                cancel: t("Dialog.cancel"),
                onSubmit: handleDelete,
              });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Thumbnail;

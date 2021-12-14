import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectStories, editStory } from "../../features/stories/slice";
import { IStory } from "../../types";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";
import Head from "../Head/Head";
import { SnackbarContext } from "../Snackbar/useSnackbar";

const Edit = () => {
  const { t } = useTranslation();

  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const story = useAppSelector(selectStories)[id as string];

  const navigate = useNavigate();

  const onSubmit = (story: IStory) => {
    navigate("/");

    dispatch(editStory({ ...story, id: id as string }));

    setSnackbar({
      ...snackbar,
      open: true,
      button: t("Snackbar.close"),
      message: t("Edit.success"),
      severity: "success",
    });
  };

  return story === undefined ? (
    <>
      <Head title={t("Title.notFound")} />

      <NotFound />
    </>
  ) : (
    <>
      <Head title={t("Title.edit", { title: story?.title })} />

      <Form defaultValues={story} onSubmit={onSubmit} />
    </>
  );
};

export default Edit;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "../../app/hooks";
import { createStory } from "../../features/stories/slice";
import { IStory } from "../../types";
import Form from "../Form/Form";
import Head from "../Head/Head";
import { SnackbarContext } from "../Snackbar/useSnackbar";

const Create = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const onSubmit = (story: IStory) => {
    navigate("/");

    dispatch(createStory({ ...story, id: uuidv4() }));

    setSnackbar({
      ...snackbar,
      open: true,
      button: t("Snackbar.close"),
      message: t("Create.success"),
      severity: "success",
    });
  };

  return (
    <>
      <Head title={t("Title.create")} />

      <Form defaultValues={{}} onSubmit={onSubmit} />
    </>
  );
};

export default Create;

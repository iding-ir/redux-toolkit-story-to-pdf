import { useTranslation } from "react-i18next";

import Thumbnails from "../Thumbnails/Thumbnails";
import Head from "../Head/Head";
import Search from "../Search/Search";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t("Title.home")} />

      <Search />

      <Thumbnails />
    </>
  );
};

export default Home;

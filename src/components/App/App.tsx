import { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../localization";
import Pages from "../Pages/Pages";
import Providers from "../Providers/Providers";
import { useAppSelector } from "../../app/hooks";
import { selectLanguage } from "../../features/languages/slice";

function App() {
  const { i18n } = useTranslation();

  const language = useAppSelector(selectLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Router>
      <Providers>
        <Pages />
      </Providers>
    </Router>
  );
}

export default App;

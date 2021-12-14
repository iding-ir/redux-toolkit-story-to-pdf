import { useEffect, ReactNode } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ReactComponent as IconEN } from "../../assets/images/icon-en.svg";
import { ReactComponent as IconES } from "../../assets/images/icon-es.svg";
import {
  selectLanguage,
  setLanguage,
  Languages,
} from "../../features/languages/slice";
import { styles } from "./styles";

export interface ILanguage {
  value: string;
  name: string;
  icon: ReactNode;
}

export interface ILanguages {
  [key: string]: ILanguage;
}

export const languages: ILanguages = {
  en: {
    value: "en",
    name: "Language.en",
    icon: <IconEN />,
  },
  es: {
    value: "es",
    name: "Language.es",
    icon: <IconES />,
  },
};

const Language = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const language = useAppSelector(selectLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleChange = (event: SelectChangeEvent) => {
    const language = event.target.value as Languages;

    dispatch(setLanguage(language));
  };

  const renderStories = () =>
    Object.values(languages).map((language: ILanguage) => {
      return (
        <MenuItem value={language.value} key={language.value}>
          <ListItemIcon sx={styles.icon}>{language.icon}</ListItemIcon>

          <ListItemText sx={styles.text} primary={t(language.name)} />
        </MenuItem>
      );
    });

  return (
    <FormControl sx={styles.language}>
      <Select
        value={language}
        label={t("Language.label")}
        onChange={handleChange}
        sx={styles.select}
        variant="standard"
        disableUnderline={true}
      >
        {renderStories()}
      </Select>
    </FormControl>
  );
};

export default Language;

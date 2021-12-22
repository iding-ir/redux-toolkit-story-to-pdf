import { Helmet } from "react-helmet-async";

import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../features/themes/slice";
import { useTheme } from "../Theme/useTheme";

interface Props {
  title: string;
}

const Head = ({ title }: Props) => {
  const mode = useAppSelector(selectMode);
  const { theme } = useTheme(mode);

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="theme-color" content={theme.palette.primary.main} />
    </Helmet>
  );
};

export default Head;

import { Trans } from "react-i18next";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Theme } from "@mui/material";

import { IStory } from "../../types";

interface Props {
  story: IStory;
  theme: Theme;
}

const PDF = ({ story, theme }: Props) => {
  const { title, author, content } = story;

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      padding: "40",
      textAlign: "left",
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
    },
    section: {
      padding: "20 0",
    },
    divider: {
      borderBottom: "1px",
      borderColor: "#cccccc",
    },
    title: {
      fontSize: "36",
      lineHeight: "1.5",
      color: theme.palette.primary.main,
    },
    author: {
      fontSize: "18",
      lineHeight: "1.5",
      color: theme.palette.text.secondary,
    },
    content: {
      fontSize: "16",
      lineHeight: "1.5",
      color: theme.palette.text.primary,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ ...styles.section, ...styles.divider }}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>

          <Text style={styles.author}>
            <Trans i18nKey="Content.author" values={{ author }} />
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>{content}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;

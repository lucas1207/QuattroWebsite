import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    textButton: {
      fontFamily: "Medium",

      fontSize: 16,
      color: styleGuide.colors.fontPrimary,
    },
  });

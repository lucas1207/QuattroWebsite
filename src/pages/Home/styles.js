import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      backgroundColor: styleGuide.colors.backgroundPrimary,
    },
  });

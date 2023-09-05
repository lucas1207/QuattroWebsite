import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      backgroundColor: styleGuide.colors.backgroundPrimary,
    },

    imageRectangle: {
      borderWidth: 10,
      width: "100%",
      resizeMode: "stretch",
      position: "absolute",
      borderWidth: 10,
    },
  });

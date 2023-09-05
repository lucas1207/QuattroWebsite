import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    viewBalls: {
      flexDirection: "row",
      alignSelf: "center",
      gap: 10,
    },

    ball: {
      height: 12,
      width: 12,
      backgroundColor: styleguide.colors.backgroundPrimary,
      borderRadius: 10,
    },
  });

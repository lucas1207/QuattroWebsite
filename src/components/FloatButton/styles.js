import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",

      right: 30,
      bottom: 50,
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      backgroundColor: styleguide.colors.quattroLightBlue,
      borderRadius: 50,
    },
  });

import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    viewLogos: {
      width: "80%",
      marginTop: 50,
      gap: 80,
      maxWidth: 1300,
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "row",
      marginBottom: 100,
    },
    imageLogo: {
      height: 100,
      width: 100,
      resizeMode: "contain",
    },
  });

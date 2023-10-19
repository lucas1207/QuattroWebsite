import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#00000099",
      zIndex: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    image: {
      height: "70%",
      width: "50%",
      resizeMode: "contain",
    },
  });

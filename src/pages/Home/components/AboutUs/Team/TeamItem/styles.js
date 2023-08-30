import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    container: {
      width: 250,
      height: 310,
      borderWidth: 4,
      alignItems: "center",
      borderRadius: 2,
      borderColor: "#898989",
      marginBottom: 265 / 2 + 50,
    },

    image: {
      height: 210,
      width: 210,
      borderRadius: 200,
      alignSelf: "center",
      transform: [{ translateY: -265 / 2 }],
    },

    textName: {
      fontFamily: "SemiBold",
      fontSize: 20,
    },

    textPosition: {
      fontFamily: "Medium",
      marginTop: 10,
      fontSize: 18,
      marginBottom: 40,
    },

    buttonSocialMedia: {
      marginHorizontal: 10,
    },

    viewSocialMedia: {
      height: 60,

      width: "100%",
      flexDirection: "row",
      paddingVertical: 20,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });

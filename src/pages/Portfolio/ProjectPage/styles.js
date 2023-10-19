import { StyleSheet } from "react-native";

export const createStyles = (styleguide, maxWidth) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: styleguide.colors.backgroundPrimary,
    },

    viewContent: {
      maxWidth: maxWidth,
      alignSelf: "center",
      paddingBottom: 100,
      width: "100%",
      paddingLeft: "2.4rem",
    },
    viewTop: {
      width: "100%",
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "3.5rem",
    },

    viewTopText: {
      fontSize: "1.5rem",
      fontWeight: "regular",
      color: styleguide.colors.fontPrimary,
      marginLeft: "0.75rem",
    },

    textTitle: {
      fontSize: "2rem",
      fontFamily: "Medium",
      marginBottom: "1.5rem",
      color: "#000000",
    },

    textPronac: {
      fontSize: "1.4rem",
      marginBottom: "1rem",
      fontFamily: "Regular",
      color: styleguide.colors.fontPrimary,
    },

    textValor: {
      fontSize: "1.3rem",
      marginBottom: "1rem",
      fontFamily: "Regular",
      color: styleguide.colors.fontPrimary,
    },

    textDescription: {
      fontSize: "1.1rem",
      fontFamily: "Regular",
      color: styleguide.colors.fontPrimary,
    },

    containerContent: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    viewLeft: {
      width: "40%",
      paddingRight: 30,
      height: "100%",
      alignItems: "flex-start",
    },
    imagemCapa: {
      height: "25rem",
      width: "100%",
      resizeMode: "contain",
    },

    viewRight: {
      width: "60%",
      height: "100%",
      paddingBottom: 40,
    },

    rowImages: {
      width: " 100%",
      marginTop: 30,
      alignItems: "center",
      flexDirection: " row",
      justifyContent: "space-between",
    },

    buttonSaibaMais: {
      height: 50,
      width: 240,
      borderRadius: 6,
      backgroundColor: styleguide.colors.quattroLightBlue,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
      marginLeft: 20,
    },

    buttonLivro: {
      height: 50,
      width: 240,
      borderRadius: 6,
      backgroundColor: styleguide.colors.quattroDarkBlue,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,

      marginLeft: 20,
    },

    textSaibaMais: {
      fontSize: 16,
      fontFamily: "Medium",
      color: "white",
    },
  });

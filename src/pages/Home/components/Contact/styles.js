import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) => StyleSheet.create ({
  container:{
    width: '100%',
    alignItems: 'space-around',
    backgroundColor: styleGuide.colors.backgroundPrimary,
    flexDirection: 'row',
    paddingHorizontal: 200,
    paddingVertical: 150
  },

  textTitle:{
    color: "#333",
    fontFamily: 'Medium',
    fontSize: 32,
    padding: 20
  },
  
  containerLeft:{
    width:'40%',
  },

  imgPlaceHolder:{
    width: 600,
    height: 450,
    backgroundColor: styleGuide.colors.backgroundThird
  },

  containerRight:{
    width:'60%',
    height: 600,
    backgroundColor:'white',

    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },

})
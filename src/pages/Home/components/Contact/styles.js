import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) => StyleSheet.create ({
  container:{
    width: '80%',
    maxWidth: styleGuide.maxWidth,
    alignItems: 'space-around',
    backgroundColor: styleGuide.colors.backgroundPrimary,
    flexDirection: 'row',
    paddingVertical: 150,
    alignSelf: 'center'
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
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',

    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },

  button:{
    width: 240,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#5fbfcb',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    color: '#fff',
    fontFamily: 'Medium',
    fontSize: 16,
  }

})
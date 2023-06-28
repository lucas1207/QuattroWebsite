import { StyleSheet } from 'react-native';

export const createStyles = (styleGuide) => StyleSheet.create({
  container: {
  
    paddingTop: 100,
    width:  '100%',
   paddingBottom: 150,
   flexDirection: 'row',
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 32,
  },

  linearGradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 32, 
  },

  title: {
    fontFamily:'Medium',
    fontSize: 65,
    color: 'white',
    zIndex: 10,
  },

  viewContent: {
    zIndex: 10,
    paddingLeft: 50,
  },

  viewBall: {
    height: 15,
    width: 15,
    bottom: 15,
    left: 15,
    borderRadius: 15,
    backgroundColor: styleGuide.colors.quattroRed,
  },

  description: {
    fontSize: 20,
    marginTop: 20,
    color: 'white',
    fontFamily: 'Regular',
    maxWidth: '50%'
  },

  button: {
    height: 50,
    width: 200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleGuide.colors.quattroRed,
    marginTop: 70
  },

  textButton: {
    fontFamily: 'Medium',
    fontSize: 18,
    color: 'white'
  }


});

import {StyleSheet} from 'react-native';


export const createStyles = (styleguide) => StyleSheet.create ({
 container: {
   width: '100%',
  alignItems: 'center',
  justifyContent: 'center',

 },

 backgroundImage: {
  height: '100%',
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  resizeMode: 'cover'
 },

 viewFilter: {
  height: '100%',
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  backgroundColor: '#003941',
  opacity: 0.85
 },

 viewContent: {
  zIndex: 3,
  maxWidth: styleguide.maxWidth,
  width: "100%",

  paddingHorizontal: 20,
  alignSelf: 'center',
  alignItems: 'center',
 },

 textTitle: {
  color: 'white',
  fontFamily: 'Medium',
  fontSize: 38,
 
  marginBottom: 15,
 },
 textSubtitle: {
  color: 'white',
  fontFamily: 'Medium',
  fontSize: 18,
  marginBottom: 90
 },

 textDepoiments: {
  fontFamily: 'Regular',
  fontSize: 30,
  lineHeight: 45,
  color:'white',
  marginBottom: 80,
 },

 textAuthor: {
  fontFamily: 'Regular',
  fontSize: 18,
  color: 'white',
  marginBottom: 10,
  alignSelf: 'flex-start'
 },
 textOcupation: {
  fontFamily: 'Regular',
  fontSize: 18,
  color: 'white',
  marginBottom: 30,
  alignSelf: 'flex-start'
 },

 viewBalls: {
  alignSelf: 'flex-start',
  flexDirection: 'row',
  gap: 10,
  marginBottom: 30,
 },

 ball: {
  height: 12,
  width: 12,
  backgroundColor: styleguide.colors.backgroundPrimary,
  borderRadius: 10,
 },

 imageTriangle: {
  width: '100%',
  zIndex: 3,
  
 }

 

})
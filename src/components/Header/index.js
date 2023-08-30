import React, { useCallback, useEffect, useMemo } from 'react';
import { Pressable, View,Image,Text, Linking } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../hooks/styleguide';


import LogoQuattro from '../../assets/imgs/LogoQuattro.png'
import Linkedin from '../../assets/svgs/linkedin';
import Facebook from '../../assets/svgs/facebook';
import Youtube from '../../assets/svgs/youtube';
import { usePositions } from '../../hooks/positions';

const Header = ({ref}) => {

  const {styleguide, responsive, maxWidth} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const {positions} = usePositions()


  const tabs = [
    "Portfolio",
    "Sobre",
    "Patrocinadores",
    "Contato",
  ]



 


  const handleButtonPress = useCallback((item)=>{

  
    switch(item) {
      case 'Portfolio' : return console.log('portfolio')
      case 'Sobre' :  return window.scrollTo(0,positions.aboutUs - 100);

      case 'Patrocinadores' :return window.scrollTo(0,positions.sponsors);
      case 'Contato' :return  window.scrollTo(0,positions.contact);
    }
  },[positions])

  return (

  <View onLayout={(e)=>{}}style={styles.container}>
      <View style={[styles.contentContainer,{maxWidth}]}>

          <Pressable style={styles.buttonQuattro}>
            <Image source={LogoQuattro} style={styles.logoQuattro}></Image>
          </Pressable>



         {responsive === 'web' ? 
         
         <View style={styles.viewLinks}>
             {tabs.map((item,index)=> (
                <Pressable key={index} onPress={()=>{handleButtonPress(item)}}>
                  <Text style={styles.textButton}>{item}</Text>
                </Pressable>
             ))}
          </View>
         : 
         null
         }

         {responsive === 'web' ?   <View style={styles.viewSocialMedia}>
                <Pressable 
                  style={styles.buttonSocialMedia}
                  onPress={() => {Linking.openURL('https://www.facebook.com/quattroprojetos')}}  
                >
                  <Facebook/>
                </Pressable >
                <Pressable  
                  style={styles.buttonSocialMedia}
                  onPress={() => {Linking.openURL('https://www.linkedin.com/company/quattro-projetos')}}  
                >
                  <Linkedin />
                </Pressable>
                <Pressable  
                  style={styles.buttonSocialMedia}
                  onPress={() => {Linking.openURL('https://www.youtube.com/user/QuattroProjetos')}}
                >
                  <Youtube/>
                </Pressable>
          </View> : <Pressable style={{height: 50, width: 50, borderWidth: 1}}/>}
      </View>
  </View>

  );
}

export default Header;

import React, { useCallback, useMemo } from 'react';
import { Pressable, View,Image,Text } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../hooks/styleguide';


import LogoQuattro from '../../assets/imgs/LogoQuattro.png'
import Linkedin from '../../assets/svgs/linkedin';
import Facebook from '../../assets/svgs/facebook';
import Youtube from '../../assets/svgs/youtube';

const Header = () => {

  const {styleguide, responsive} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);


  const tabs = [
    "Portfolio",
    "Sobre",
    "Patrocinadores",
    "Contato",
  ]



  const handleButtonPress = useCallback((item)=>{

    switch(item) {
      case 'Portfolio' : return console.log('portfolio')
      case 'Sobre' : return console.log('Sobre')
      case 'Patrocinadores' :return console.log('Patrocinadores')
      case 'Contato' :return console.log('Contato')
    }
  },[])

  return (

  <View onLayout={(e)=>{}}style={styles.container}>
      <View style={styles.contentContainer}>

          <Pressable style={styles.buttonQuattro}>
            <Image source={LogoQuattro} style={styles.logoQuattro}></Image>
          </Pressable>

         {responsive === 'web' ? 
         
         <View style={styles.viewLinks}>
             {tabs.map((item)=> (
                <Pressable onPress={()=>{handleButtonPress(item)}}>
                  <Text style={styles.textButton}>{item}</Text>
                </Pressable>
             ))}
          </View>
         : 
         null
         }

         {responsive === 'web' ?   <View style={styles.viewSocialMedia}>
                <Pressable style={styles.buttonSocialMedia}>
                  <Facebook/>
                </Pressable >
                <Pressable  style={styles.buttonSocialMedia}>
                  <Linkedin />
                </Pressable>
                <Pressable  style={styles.buttonSocialMedia}>
                  <Youtube/>
                </Pressable>
          </View> : <Pressable style={{height: 50, width: 50, borderWidth: 1}}/>}
      </View>
  </View>

  );
}

export default Header;

import React, { useCallback, useMemo } from 'react';
import { Pressable, View, Image, Text } from 'react-native';

import { createStyles } from './styles';
import { useStyleguide } from '../../hooks/styleguide';


import Linkedin from '../../assets/svgs/linkedin';
import Facebook from '../../assets/svgs/facebook';
import Youtube from '../../assets/svgs/youtube';

const Footer = () => {

  const { styleguide, responsive } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);


  return (

    <View onLayout={(e) => { }} style={styles.container}>
      <View style={styles.contentContainer}>

        {responsive === 'web' ? 
        <View style={styles.caixaTextoFooter}>
          <View>
            <Text style={styles.textButton}>Av. Ipiranga 7464 - Sala 823</Text>
            <Text style={styles.textButton}>Jardim Botânico - Porto Alegre/RS</Text>
            <Text style={styles.textButton}>CEP 91530-000</Text>
          </View>
          <View >
            <Text style={styles.textButton}>Rua Antônio Comparato 218</Text>
            <Text style={styles.textButton}>Campo Belo - São Paulo/SP</Text>
            <Text style={styles.textButton}>CEP 04605-030</Text>
          </View>
        </View>
        : null}

        {responsive === 'web' ? <View style={styles.viewSocialMedia}>
          <Pressable style={styles.buttonSocialMedia}>
            <Facebook />
          </Pressable >
          <Pressable style={styles.buttonSocialMedia}>
            <Linkedin />
          </Pressable>
          <Pressable style={styles.buttonSocialMedia}>
            <Youtube />
          </Pressable>
        </View> : <Pressable style={{ height: 50, width: 50, berderWidth: 1 }} />}
      </View>
    </View>

  );
}

export default Footer;
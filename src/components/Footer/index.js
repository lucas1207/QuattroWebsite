
import React, { useState, useMemo } from 'react';
import { Pressable, View, Image, Text, ScrollView } from 'react-native';

import { createStyles } from './styles';
import { useStyleguide } from '../../hooks/styleguide';

import LogoQuattro from '../../assets/imgs/LogoQuattro.png'

import Linkedin from '../../assets/svgs/linkedin';
import Facebook from '../../assets/svgs/facebook';
import Youtube from '../../assets/svgs/youtube';

const Footer = () => {

  const { styleguide, responsive } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (

    <View 
      onLayout={(e) => { }}
      style={styles.container}
      
      >
      <View>
        <Pressable style={styles.buttonQuattro}>
          <Image
            source={LogoQuattro}
            style={styles.logoQuattro}
          ></Image>
        </Pressable>
      </View>
      <View>
        <Text style={styles.textFooter}>Av. Ipiranga 7464 - Sala 823</Text>
        <Text style={styles.textFooter}>Jardim Botânico - Porto Alegre/RS</Text>
        <Text style={styles.textFooter}>CEP 91530-000</Text>
      </View>
      <View>
        <Text style={styles.textFooter}>Rua Antônio Comparato 218</Text>
        <Text style={styles.textFooter}>Campo Belo - São Paulo/SP</Text>
        <Text style={styles.textFooter}>CEP 04605-030</Text>
      </View>
      <View>
        <Text style={styles.textFooter}>contato@quattroprojetos.com.br</Text>
        <Text style={styles.textFooter}>(51) 3209-7568</Text>
      </View>
      <View>
        <Pressable 
          style={styles.buttonTopo}>
          <Text style={styles.textButtonTopo}>Voltar ao topo</Text>
        </Pressable>
      </View>
    </View>

  );
}

export default Footer;
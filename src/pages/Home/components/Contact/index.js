import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../../../hooks/styleguide';

const Contato = () => {

  const {styleguide, responsive} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
  <View style={styles.container}>
    <View style={styles.containerLeft}>
      <Text style={styles.textTitle}>
        Fale Conosco
      </Text>
      <View style={styles.imgPlaceHolder}/>
    </View>

    <View style={styles.containerRight}>
      
    </View>
  </View>
  );
}

export default Contato;
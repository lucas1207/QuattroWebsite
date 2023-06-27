import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../../../hooks/styleguide';

const Patrocinadores = () => {

  const {styleguide, responsive} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
  <View style={styles.container}>
    <Text style={styles.textTitle}>
      Patrocinadores e Parceiros
    </Text>
  </View>
  );
}

export default Patrocinadores;
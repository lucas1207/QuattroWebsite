import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../../../hooks/styleguide';
import { usePositions } from '../../../../hooks/positions';

const Patrocinadores = () => {

  const {styleguide} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);
  const {setPositions} = usePositions()
  return (
  <View onLayout={(e)=>{setPositions((prevState)=> {return {...prevState,sponsors: e.nativeEvent.layout.y}})}} style={styles.container}>
    <Text style={styles.textTitle}>
      Patrocinadores e Parceiros
    </Text>
  </View>
  );
}

export default Patrocinadores;
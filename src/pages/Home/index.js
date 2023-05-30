import React from 'react';
import { View } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../hooks/styleguide';

const Home = () => {

  const {styleguide} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (

  <View style={styles.container} />

  );
}

export default Home;
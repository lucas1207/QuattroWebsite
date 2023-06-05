import React, {useMemo} from 'react';
import { View, Text } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../hooks/styleguide';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

const Home = () => {

  const {styleguide, responsive} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  console.log(responsive)
  return (

  <View style={styles.container} >
    <Header/>
    <Footer/>
  </View>

  );
}

export default Home;
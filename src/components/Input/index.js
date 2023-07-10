import React, { useEffect, useMemo, useState } from 'react';
import { Animated, View, TextInput } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../hooks/styleguide';


const Input = ({title, value, setValue, multiline = false}) => {

  const [positionX, setPositionX] = useState(new Animated.Value(15))
  const [positionY, setPositionY] = useState(new Animated.Value(39))

  const {styleguide} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide, multiline), [styleguide]);

  const Focus = () => {
    Animated.timing(positionY,{toValue:0, duration:200, useNativeDriver:true}).start()
  }

  const Blur = () => {
    Animated.timing(positionY,{toValue:39, duration:200, useNativeDriver:true}).start()
  }

  useEffect(()=>{
    if(value !=='') {
      Focus()
    }
  },[value])

  return (

  <View style={styles.container}>

    <Animated.Text style={[styles.textInput,{transform: [{translateY: positionY}, {translateX: positionX}],}]}>{title}</Animated.Text>

    <TextInput style={styles.input}
      value= {value}
      onChangeText={(text)=>{setValue(text)}}
      multiline = {multiline}
      onFocus={()=>Focus()}
      onBlur={()=> value === '' ? Blur() : null}
    />

  </View>

  );
}

export default Input;
import React, { useMemo, useRef, useState } from "react";
import { View, Text, Pressable, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../hooks/styleguide";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ListItem = ({ data }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [scale, setScale] = useState(new Animated.Value(1));

  const handleHoverIn = () => {
    Animated.timing(scale, {
      duration: 300,
      toValue: 1.15,
      useNativeDriver: true,
    }).start();
  };

  const handleHoverOut = () => {
    Animated.timing(scale, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedPressable
      onHoverIn={
        ()=>{handleHoverIn()}
      }
      onHoverOut={
        ()=>{handleHoverOut()}
        
      }
      style={[styles.container, { transform: [{ scale }] }]}
    >
      <Text style={styles.textTitle}>{data.title}</Text>

      <Text style={styles.textDescription}>Pronac: {data.pronac}</Text>

    </AnimatedPressable>
  );
};

export default ListItem;

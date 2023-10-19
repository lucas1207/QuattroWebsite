import React, { useMemo, useRef, useState } from "react";
import { View, Text, Pressable, Animated, Image } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../hooks/styleguide";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ListItem = ({ data, setSelectedItem }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [scale, setScale] = useState(new Animated.Value(1));

  const title = useMemo(() => {
    if (data.title.length > 37) {
      return `${data.title.slice(0, 37)}...`;
    } else {
      return data.title;
    }
  }, [data]);

  const handleHoverIn = () => {
    Animated.timing(scale, {
      duration: 300,
      toValue: 1.25,
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
      onPress={() => {
        setSelectedItem(data);
      }}
      onHoverIn={() => {
        handleHoverIn();
      }}
      onHoverOut={() => {
        handleHoverOut();
      }}
      style={[styles.container, { transform: [{ scale }] }]}
    >
      <Image source={data.imageUrl} style={styles.imageFundo} />
      <View style={styles.viewFilter} />
      <Text style={styles.textTitle}>{title}</Text>
    </AnimatedPressable>
  );
};

export default ListItem;

import React, { useMemo, useState } from "react";
import { View, Text, Pressable } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../hooks/styleguide";
import { Animated } from "react-native";

const ButtonHeader = ({ title, onPress, hoverColor }) => {
  const { styleguide } = useStyleguide();

  const [hover, setHover] = useState(new Animated.Value(0));
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const onHoverIn = () => {
    Animated.timing(hover, {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(hover, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const width = hover.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <Pressable
      onHoverIn={() => onHoverIn()}
      onHoverOut={() => onHoverOut()}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{title}</Text>
      <Animated.View
        style={{ width, height: 2, backgroundColor: hoverColor }}
      ></Animated.View>
    </Pressable>
  );
};

export default ButtonHeader;

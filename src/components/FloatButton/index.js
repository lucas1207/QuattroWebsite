import React, { useEffect, useMemo, useState, forwardRef } from "react";
import { Animated, Pressable } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";
import ArrowUp from "../../assets/svgs/up";
import { usePositions } from "../../hooks/positions";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const FloatButton = forwardRef(function FloatButton(props, ref) {
  const { styleguide } = useStyleguide();
  const { scrollPosition, positions } = usePositions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (scrollPosition > positions.contact - 400) {
      if (!visible) {
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
        setVisible(true);
      }
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setVisible(false);
    }
  }, [scrollPosition]);

  return (
    <AnimatedPressable
      onPress={() => {
        ref.current?.scrollTo({ x: 0, y: 0, animated: true });
      }}
      style={[styles.container, { opacity }]}
    >
      <ArrowUp color="white" />
    </AnimatedPressable>
  );
});

export default FloatButton;

import React, { useEffect, useMemo, useState } from "react";
import { View, Image, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";

const Page = ({ array }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.viewLogos, { opacity }]}>
      {array.map((item, index) => (
        <Image key={index} source={item} style={styles.imageLogo} />
      ))}
    </Animated.View>
  );
};

export default Page;

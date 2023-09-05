import React, { useMemo } from "react";
import { View } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";

const Balls = ({ list, currentIndex }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const backgroundColor = () => {
    switch (currentIndex) {
      case 0:
      case 4:
        return styleguide.colors.quattroRed;
      case 1:
      case 5:
        return styleguide.colors.quattroLightBlue;
      case 2:
      case 6:
        return styleguide.colors.quattroYellow;
      case 3:
      case 7:
        return styleguide.colors.quattroDarkBlue;
    }
  };

  return (
    <View style={[styles.viewBalls, { transform: [{ translateY: -60 }] }]}>
      {list.map((item, index) => (
        <View
          key={index}
          style={[
            styles.ball,
            {
              backgroundColor:
                index === currentIndex
                  ? backgroundColor()
                  : styleguide.colors.backgroundSecondary,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Balls;

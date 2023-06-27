import React, { useMemo } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";

import Description from "./Description";
import Team from "./Team";
import Help from "./Help";
import Rectangle from "../../../../assets/imgs/RectangleGray.png";

function AboutUs() {
  const { styleguide, maxWidth, responsive } = useStyleguide();
  const { width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  

  return (
    <View
      style={{
        zIndex: 10,
        backgroundColor: styleguide.colors.backgroundSecondary,
      }}
    >
      <View style={styles.container}>
        <View style={[styles.contentContainer, { maxWidth }]}>
          <Description />

          <Team />

          <Help />
        </View>
      </View>
      <Image
        source={Rectangle}
        style={
        
          {
            height: responsive === "web" ? 167 : 70,
            bottom: responsive === "web" ? -167 : -70,
          }
        }
      />
    </View>
  );
}

export default AboutUs;

import React, { useMemo } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";

import Description from "./Description";
import Team from "./Team";
import Help from "./Help";
import Rectangle from "../../../../assets/imgs/RectangleGray.png";
import { usePositions } from "../../../../hooks/positions";

function AboutUs() {
  const { styleguide, maxWidth, responsive } = useStyleguide();
  const {setPositions} = usePositions()
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  

  return (
    <View 
    onLayout={(e)=>{setPositions((prevState)=> {return {...prevState,aboutUs: e.nativeEvent.layout.y}})}}
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

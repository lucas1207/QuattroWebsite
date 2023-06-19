import React, { useMemo } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";


import Description from "./Description";
import Team from "./Team";
import Help from "./Help";

function AboutUs() {
  const { styleguide, maxWidth,responsive } = useStyleguide();
  const { width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const imageWidth = useMemo(() => {
    return width * 0.3;
  }, [width]);

  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, { maxWidth }]}>
      

      <Description/>


      <Team/>


       <Help/>
      </View>
    </View>
  );
}



export default AboutUs;

import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";
import { usePositions } from "../../../../../hooks/positions";

function Help() {
  const { styleguide } = useStyleguide();
  const { scrollPosition } = usePositions();

  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [translateY, setTranslateY] = useState(new Animated.Value(250));
  const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    if (scrollPosition > componentHeight + 20) {
      if (!hasAnimated) {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start();
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
        setHasAnimated(true);
      }
    }
  }, [scrollPosition]);

  return (
    <Animated.View
      onLayout={(e) => {
        setComponentHeight(e.nativeEvent.layout.y);
      }}
      style={{ opacity, transform: [{ translateY }] }}
    >
      <View style={styles.viewHelp}>
        <View style={styles.viewLine} />
        <View style={{ flexDirection: "row" }} />
        <Text style={styles.textHelp}>NOSSOS</Text>
        <Text style={styles.textHelpBold}> NÚMEROS</Text>
        <View style={styles.viewLine} />
      </View>

      <View style={styles.viewInfo}>
        <View style={styles.itemInfo}>
          <Text style={styles.textInfoBold}>100</Text>
          <Text style={styles.textInfo}>Projetos aprovados</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.textInfoBold}>+ 22 milhões</Text>
          <Text style={styles.textInfo}>Reais captados</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.textInfoBold}>+ 15 anos</Text>
          <Text style={styles.textInfo}>Atuando no mercado</Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default Help;

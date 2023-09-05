import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";
import exemple from "../../../../../assets/imgs/avatarExemple.png";
import TeamItem from "./TeamItem";

import avatarThiago from "../../../../../assets/imgs/AvatarThiago.png";
import avatarMatheus from "../../../../../assets/imgs/AvatarMatheus.png";
import avatarFlavio from "../../../../../assets/imgs/AvatarFlavio.png";
import { usePositions } from "../../../../../hooks/positions";

function Team() {
  const { styleguide, responsive } = useStyleguide();
  const { scrollPosition } = usePositions();

  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [componentHeight, setComponentHeight] = useState(0);
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [translateY, setTranslateY] = useState(new Animated.Value(250));
  const [hasAnimated, setHasAnimated] = useState(false);

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
      style={{ marginBottom: 100, opacity, transform: [{ translateY }] }}
    >
      <Text style={styles.textTeam}>NOSSO TIME</Text>

      <View
        style={{
          flexDirection: responsive === "web" ? "row" : "column",
          justifyContent: responsive === "web" ? "space-evenly" : "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <TeamItem
          avatar={avatarThiago}
          name="Thiago Vazquez"
          position="Gestor de Projetos"
          linkedin="https://www.linkedin.com/in/thiago-vazquez-enninger-542077b6/"
          email="thiago@quattroprojetos.com.br"
        />
        <TeamItem
          avatar={avatarFlavio}
          name="Flávio Enninger"
          position="Diretor"
          linkedin="https://www.linkedin.com/in/matheus-enninger-30641872/"
          email="flavio@quattroprojetos.com.br"
        />
        <TeamItem
          avatar={avatarMatheus}
          name="Matheus Enninger"
          position="Diretor de Projetos"
          linkedin="https://www.linkedin.com/in/flavio-quattro-33a919b2/"
          email="matheus@quattroprojetos.com.br"
        />
      </View>
    </Animated.View>
  );
}

export default Team;

import React, { useMemo } from "react";
import { View, Text, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";
import exemple from "../../../../../assets/imgs/avatarExemple.png";
import TeamItem from "./TeamItem";

import avatarThiago from "../../../../../assets/imgs/AvatarThiago.png";
import avatarMatheus from "../../../../../assets/imgs/AvatarMatheus.png";
import avatarFlavio from "../../../../../assets/imgs/AvatarFlavio.png";

function Team() {
  const { styleguide, responsive } = useStyleguide();

  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
    <View style={{ marginBottom: 100 }}>
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
        />
        <TeamItem
          avatar={avatarFlavio}
          name="Flávio Enninger"
          position="Diretor"
        />
        <TeamItem
          avatar={avatarMatheus}
          name="Matheus Enninger"
          position="Diretor de Projetos"
        />
      </View>
    </View>
  );
}

export default Team;

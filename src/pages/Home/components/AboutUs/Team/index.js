import React, { useMemo } from "react";
import { View, Text, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";
import exemple from "../../../../../assets/imgs/avatarExemple.png";
import TeamItem from "./TeamItem";

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
        <TeamItem avatar={exemple} name="Thiago Vazquez" position="Diretor 1" />
        <TeamItem avatar={exemple} name="Thiago Vazquez" position="Diretor 1" />
        <TeamItem avatar={exemple} name="Thiago Vazquez" position="Diretor 1" />
      </View>
    </View>
  );
}

export default Team;

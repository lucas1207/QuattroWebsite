import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";

function Help() {
  const { styleguide } = useStyleguide();

  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
    <>
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
    </>
  );
}

export default Help;

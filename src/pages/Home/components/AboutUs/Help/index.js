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
        <Text style={styles.textHelp}>AJUDAMOS</Text>
        <Text style={styles.textHelpBold}> A REALIZAR</Text>
        <View style={styles.viewLine} />
      </View>
      

      <View style={styles.viewInfo}>

        <View style={styles.itemInfo}>
          <Text style={styles.textInfoBold}>+ de 500</Text>
          <Text style={styles.textInfo}>Projetos Aprovados</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.textInfoBold}>50</Text>
          <Text style={styles.textInfo}>Parceiros</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.textInfoBold}>+ 50 milhões</Text>
          <Text style={styles.textInfo}>Captados para nossos projetos</Text>
        </View>

      </View>

      <View style={{height: 400}}/>
    </>
  );
}

export default Help;

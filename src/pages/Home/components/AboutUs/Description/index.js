import React, { useMemo } from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";
import imageExemple from "../../../../../assets/imgs/exemple1.png";


function Description() {
  const { styleguide, maxWidth, responsive } = useStyleguide();
  const { width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const imageWidth = useMemo(() => {
    return width * 0.3;
  }, [width]);

  return (
    <>
      <View style={{ marginBottom: 80, transform: [{ translateY: -20 }] }}>
        <Text style={styles.textAbout}>Sobre nós</Text>
        <View style={styles.viewLine} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
          marginBottom: 150,
        }}
      >
        {responsive === "web" && (
          <Image
            source={imageExemple}
            style={{
              width: imageWidth,
              maxWidth: 550,
              marginRight: 100,
              height: imageWidth * 1.51,
              resizeMode: "contain",
            }}
          />
        )}

        <View style={[styles.viewText]}>
          <Text style={styles.textDescription}>
            {"      "}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including.
          </Text>
        </View>
      </View>
    </>
  );
}

export default Description;

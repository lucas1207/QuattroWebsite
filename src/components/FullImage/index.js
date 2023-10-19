import React, { useMemo } from "react";
import { Image, Pressable, View, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";
import Close from "../../assets/svgs/close";

const FullImage = ({ selectedImage, setSelectedImage }) => {
  const { styleguide } = useStyleguide();

  const { height, width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
    <View style={[styles.container, { height, width: width - 1 }]}>
      <Pressable
        style={{ position: "absolute", right: 100, top: 50 }}
        onPress={() => {
          setSelectedImage(null);
        }}
      >
        <Close color={"#f2f2f2"} />
      </Pressable>
      <Image style={styles.image} source={selectedImage} />
    </View>
  );
};

export default FullImage;

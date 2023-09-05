import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Image, useWindowDimensions, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../hooks/styleguide";
import PhotoAboutUs from "../../../../../assets/imgs/FotoSobreNos.jpg";
import { usePositions } from "../../../../../hooks/positions";

function Description() {
  const { styleguide, responsive } = useStyleguide();
  const { width } = useWindowDimensions();
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

  const imageWidth = useMemo(() => {
    return width * 0.2;
  }, [width]);

  return (
    <Animated.View
      onLayout={(e) => {
        setComponentHeight(e.nativeEvent.layout.y);
      }}
      style={{ opacity, transform: [{ translateY }] }}
    >
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
            source={PhotoAboutUs}
            style={{
              width: imageWidth,
              maxWidth: 550,
              marginRight: 130,
              height: imageWidth * 1.51,
              resizeMode: "contain",
            }}
          />
        )}

        <View style={[styles.viewText]}>
          <Text style={styles.textDescription}>
            {"      "}Atuamos promovendo o acesso à cultura por meio de projetos
            de qualidade, utilizando como ferramenta as leis de incentivo à
            cultura. Com experiência de mais de quinze anos em consultoria e
            execução de projetos, constam no nosso portfólio a produção de
            livros, exposições, oficinas de arte, concertos musicais, construção
            e manutenção de centros culturais.{"\n"}
            {"\n"} Com nossos projetos buscamos impactar positivamente a
            sociedade, por meio de iniciativas que contribuam para o
            desenvolvimento social e promovam a inclusão, educação e valorização
            da cultura, proporcionando experiências significativas ao público.
            {"\n"}
            {"\n"} Nosso objetivo é sermos reconhecidos como uma empresa
            referência no setor de projetos culturais, consolidando nossa
            posição como parceiros confiáveis e inovadores.
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default Description;

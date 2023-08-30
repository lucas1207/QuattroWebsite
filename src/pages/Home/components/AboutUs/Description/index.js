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
    return width * 0.2;
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
    </>
  );
}

export default Description;

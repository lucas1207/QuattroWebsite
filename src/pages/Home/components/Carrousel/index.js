import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  useWindowDimensions,
  Text,
  Pressable,
  Image,
  Linking,
} from "react-native";
import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";

import Carousel from "react-native-reanimated-carousel";
import Right from "../../../../assets/svgs/right";
import Background from "../../../../assets/imgs/exempleSlide.png";
import { LinearGradient } from "expo-linear-gradient";

import backgroundCasaDeMetal from "../../../../assets/imgs/backgroundCasaDeMetal.jpg";
import backgroundConcurso from "../../../../assets/imgs/BackgroundConcurso.png";
import Balls from "../../../../components/Balls";

function Carrousel() {
  const { styleguide } = useStyleguide();
  const carouselRef = useRef();
  const { width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [index, setIndex] = useState(0);

  const data = [
    {
      image: Background,
      title: "Site em desenvolvimento",
      description:
        "Em breve com informações sobre projetos, concursos e cultura",
    },
    {
      image: backgroundCasaDeMetal,
      title: `"As Bacantes", Kislansky`,
      description:
        " A exposição expõe diferentes facetas do processo de produção de Israel Kislansky que se interconectam e aprofundam o olhar para as Bacantes: a vivência do ateliê, as experiências e histórias de sua trajetória artística e sua formação e conhecimento no campo da fundição.",
      link: "https://casademetalcultural.com.br/atividades-culturais/as-bacantes-10-anos-de-fundicao-artistica-por-israel-kislansky/",
    },

    {
      image: backgroundConcurso,
      title: "Concurso Gastronônico",
      description:
        "Premiará as melhores receitas gastronômicas do Brasil que utilizem ingredientes do Pará e utensílios de alumínio.",
      link: "https://www.alimentandonossacultura.com.br/",
    },
  ];

  const handleButtonPress = () => {
    carouselRef?.current.prev();

    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const RenderItem = (item, index) => {
    const backgroundColor = () => {
      switch (index) {
        case 0:
        case 4:
          return styleguide.colors.quattroRed;
        case 1:
        case 5:
          return styleguide.colors.quattroYellow;
        case 2:
        case 6:
          return styleguide.colors.quattroLightBlue;
        case 3:
        case 7:
          return styleguide.colors.quattroDarkBlue;
      }
    };
    return (
      <View
        key={index}
        style={{
          width: "95%",
          height: 600,
          borderRadius: 32,
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={styles.backgroundImage} />
        <LinearGradient
          start={[0.5, 0.5]}
          end={[1, 0.5]}
          colors={["#000000BF", "#00000066", "#0000001A"]}
          style={styles.linearGradient}
        />
        <View style={styles.viewContent}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={styles.title}>{item.title}</Text>
            <View
              style={[styles.viewBall, { backgroundColor: backgroundColor() }]}
            />
          </View>

          <Text style={styles.description}>{item.description}</Text>

          {item.link && (
            <Pressable
              onPress={() => {
                Linking.openURL(item.link);
              }}
              style={[styles.button, { backgroundColor: backgroundColor() }]}
            >
              <Text style={styles.textButton}>SAIBA MAIS</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-evenly" }}>
        <Carousel
          loop
          width={0.93 * width}
          height={700}
          ref={carouselRef}
          data={data}
          scrollAnimationDuration={1300}
          autoPlayReverse
          snapEnabled={false}
          enabled={false}
          // onSnapToItem={(index) => setIndex(index)}
          mode="parallax"
          modeConfig={{
            parallaxScrollingOffset: 190,
            parallaxScrollingScale: 0.95,
            parallaxAdjacentItemScale: 0.85,
          }}
          style={{ paddingLeft: 120 }}
          renderItem={({ item, index }) => RenderItem(item, index)}
        />
        <Balls list={data} currentIndex={index}></Balls>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Right color={"#9C9C9C"} />
        </Pressable>
      </View>
    </View>
  );
}

export default Carrousel;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Image, Text, Pressable, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";
import Background from "../../../../assets/imgs/paralax1.jpg";
import Yellow from "../../../../assets/svgs/yellow";
import Triangle from "../../../../assets/imgs/RectangleGray2.png";
import Right from "../../../../assets/svgs/right";
import Left from "../../../../assets/svgs/left";

const Depoiments = () => {
  const [depoimentIndex, setDepoimentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  const { styleguide, responsive } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide, opacity), [styleguide]);

  const depoiments = [
    {
      depoiment:
        "        Uma parceria brilhante que transforma ideias em eventos culturais inesquecíveis. Juntos, realizamos arte e encantamos corações! #EventosCulturais #ParceriaTop",
      author: "Ana Lídia",
      position: "CEO da Emotion Eventos",
    },
    {
      depoiment:
        "       Trabalhei com a Quattro como produtora e gestora de projetos durante 15 anos, em várias ações e em várias empresas. Só isso já indica que a parceria que estabelecemos foi duradoura, baseada em compromisso, entregas e a capacidade de formatar propostas que tinham significado para os stakeholders e para as comunidades abrangidas. Vida longa para a empresa.",
      author: "Milton Rego,",
      position: "Presidente Executivo na Abiclor",
    },
  ];

  const handleButtonPress = useCallback(
    (side) => {
      if (animating) {
        return;
      } else {
        setAnimating(true);
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }).start(() => {
          if (side === "right") {
            setDepoimentIndex(
              depoimentIndex === depoiments.length - 1 ? 0 : depoimentIndex + 1
            );
          } else {
            setDepoimentIndex(
              depoimentIndex === 0 ? depoiments.length - 1 : depoimentIndex - 1
            );
          }
          Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            delay: 100,
            useNativeDriver: false,
          }).start(() => {
            setAnimating(false);
          });
        });
      }
    },
    [depoimentIndex, animating]
  );

  useEffect(() => {}, []);

  return (
    <View
      style={[
        styles.container,
        { paddingTop: responsive === "web" ? 167 : 70 },
      ]}
    >
      <View style={{ flexDirection: "row", zIndex: 5 }}>
        <View style={styles.viewArrow}>
          <Pressable
            onPress={() => {
              handleButtonPress("left");
            }}
            style={styles.buttonArrow}
          >
            <Left />
          </Pressable>
        </View>
        <View style={[styles.viewContent]}>
          <Text style={styles.textTitle}>Depoimentos</Text>

          <View>
            <Animated.View
              style={{ position: "absolute", top: -30, left: 5, opacity }}
            >
              <Yellow />
            </Animated.View>
            <Animated.Text style={styles.textDepoiments}>
              {depoiments[depoimentIndex].depoiment}
            </Animated.Text>
          </View>

          <Animated.Text style={styles.textAuthor}>
            {depoiments[depoimentIndex].author}
          </Animated.Text>

          <Animated.Text style={styles.textOcupation}>
            {depoiments[depoimentIndex].position}
          </Animated.Text>

          <View style={styles.viewBalls}>
            {depoiments.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.ball,
                  {
                    backgroundColor:
                      index === depoimentIndex
                        ? styleguide.colors.quattroYellow
                        : styleguide.colors.backgroundPrimary,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.viewArrow}>
          <Pressable
            onPress={() => {
              handleButtonPress("right");
            }}
            style={styles.buttonArrow}
          >
            <Right />
          </Pressable>
        </View>
      </View>

      <Image
        style={[
          styles.imageTriangle,
          {
            height: responsive === "web" ? 167 : 70,
          },
        ]}
        source={Triangle}
      />
      <Image source={Background} style={styles.backgroundImage} />
      <View style={styles.viewFilter} />
    </View>
  );
};

export default Depoiments;

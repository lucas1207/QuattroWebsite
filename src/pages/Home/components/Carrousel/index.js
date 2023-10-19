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
import { getDatabase, ref, onValue } from "firebase/database";

function Carrousel() {
  const db = getDatabase();

  const { styleguide } = useStyleguide();
  const carouselRef = useRef();
  const { height, width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const [index, setIndex] = useState(0);

  const [loading, setLoading] = useState(false);

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setLoading(true);
    const slides = ref(db, "slides/");
    onValue(slides, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setSlides(Object.values(data));
      } else {
        setSlides([]);
      }
    });
    setLoading(false);
  }, []);

  const handleButtonPress = () => {
    carouselRef?.current.prev();

    if (index < slides.length - 1) {
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
          width: "90%",
          height: height * 0.7,
          borderRadius: 32,
          justifyContent: "center",
        }}
      >
        <Image source={item.imageUrl} style={styles.backgroundImage} />
        <LinearGradient
          start={[0.5, 0.5]}
          end={[1, 0.5]}
          colors={["#000000D9", "#000000BF", "#0000001A"]}
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
    <View style={[styles.container, { height: height * 0.95 }]}>
      <View
        style={{
          justifyContent: "space-evenly",

          marginTop: 110,
        }}
      >
        <Carousel
          loop
          width={0.93 * width}
          ref={carouselRef}
          data={slides}
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
        <Balls list={slides} currentIndex={index}></Balls>
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

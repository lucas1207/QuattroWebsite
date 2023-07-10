import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  useWindowDimensions,
  Text,
  Pressable,
  Image,
} from "react-native";
import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";

import Carousel from "react-native-reanimated-carousel";
import Right from "../../../../assets/svgs/right";
import Background from "../../../../assets/imgs/exempleSlide.png";
import { LinearGradient } from "expo-linear-gradient";

function Carrousel() {
  const { styleguide } = useStyleguide();
  const carouselRef = useRef();
  const { width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);


  const data = [ {
    title: 'Teste 1',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  },  {
    title: 'Teste 2',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  },  {
    title: 'Teste 3',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  },  {
    title: 'Teste 4',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  },
  {
    title: 'Teste 5',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  },
  {
    title: 'Teste 6',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  },
  {
    title: 'Teste 7',
    description: ' Lorem Ipsum is simply dummy text of the printing and, Lorem Ipsum issimply dummy text of the printing and , Lorem Ipsum is simply dummytext of the printing and , Lorem Ipsum is',   
  }];



  const handleButtonPress = () => {
    carouselRef?.current.prev();
    
  };



  const RenderItem = (item, index) => {
  

    const backgroundColor =()=> {
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
    }
    return (
      <View
      key={index}
        style={{
          width: "90%",
          height: 550,
          borderRadius: 32,
          justifyContent: "center",
        }}
      >
        <Image source={Background} style={styles.backgroundImage} />
        <LinearGradient
          start={[0.5, 0.5]}
          end={[1, 0.5]}
          colors={["#000000b3", "#000000b3", "#00000000"]}
          style={styles.linearGradient}
        />
        <View style={styles.viewContent}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={[styles.viewBall,{backgroundColor: backgroundColor()}]} />
          </View>

          <Text style={styles.description}>
         {item.description}
          </Text>

          <Pressable style={[styles.button,{backgroundColor: backgroundColor()}]}>
            <Text style={styles.textButton}>SAIBA MAIS</Text>
          </Pressable>
        </View>
      </View>
    );
  };

 

  return (
    <View style={styles.container}>
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
        autoPlayInterval={100}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 190,
          parallaxScrollingScale: 0.95,
          parallaxAdjacentItemScale: 0.85,
        }}
        style={{ paddingLeft: 120 }}
        renderItem={({ item, index }) => RenderItem(item, index)}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

import React, { useMemo, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

import { createStyles } from "./styles";
import ListItem from "../ListItem";
import { useStyleguide } from "../../../hooks/styleguide";
import { LinearGradient } from "expo-linear-gradient";
import Right from "../../../assets/svgs/right";
import Left from "../../../assets/svgs/left";

const Category = ({ item, setSelectedItem }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const scrollViewRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);

  const title = useMemo(() => {
    switch (item.category) {
      case "livros":
        return "Livros";
      case "exposicoes":
        return "Exposições";
      case "livros/exposicoes":
        return "Livros + Exposições";
      case "centros":
        return "Centros Culturais";
      case "concursos":
        return "Concursos Culturais";
      case "festivais":
        return "Festivais";
        case "artes":
          return "Artes Cênicas";
    }
  }, [item]);

  const handleButtonPress = (side) => {
    scrollViewRef.current?.scrollTo({
      x: side === "left" ? scrollPosition - 800 : scrollPosition + 800,
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>{title}</Text>
        <Pressable
          onPress={() => {
            handleButtonPress("left");
          }}
          style={styles.buttonArrow}
        >
          <View style={{ transform: [{ scale: 0.5 }] }}>
            <Left
              color={
                scrollPosition > 0 ? styleguide.colors.fontPrimary : "#d9d9d9"
              }
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            handleButtonPress("right");
          }}
          style={styles.buttonArrow}
        >
          <View style={{ transform: [{ scale: 0.5 }] }}>
            <Right color={styleguide.colors.fontPrimary} />
          </View>
        </Pressable>
      </View>

      <View style={{ width: "100%", flexDirection: "row" }}>
        <ScrollView
          onScroll={(e) => {
            setScrollPosition(e.nativeEvent.contentOffset.x);
          }}
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{
            width: "100%",
            padding: 20,
            paddingLeft: 30,

            paddingBottom: 25,
          }}
        >
          {item.projects.map((item, index) => {
            return (
              <ListItem
                setSelectedItem={setSelectedItem}
                key={index}
                id={index}
                data={item}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;

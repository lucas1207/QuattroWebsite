import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";
import Header from "../../components/Header";
import Carrousel from "./components/Carrousel";
import AboutUs from "./components/AboutUs";
import Depoiments from "./components/Depoiments";
import Patrocinadores from "./components/Sponsors";
import Footer from "../../components/Footer";
import FaleConosco from "../Home/components/Contact";
import { usePositions } from "../../hooks/positions";
import FloatButton from "../../components/FloatButton";
const Home = () => {
  const { styleguide } = useStyleguide();
 
  const scrollRef = useRef();
  const {  setScrollPosition } = usePositions();
  const { height, width } = useWindowDimensions();

  console.log(scrollRef)

  return (
    <>
      <View
        style={{
          height,
          width: width - 1,
          backgroundColor: styleguide.colors.backgroundPrimary,
        }}
      >
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            setScrollPosition(e.nativeEvent.contentOffset.y);
          }}
          ref={scrollRef}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Carrousel />

          <AboutUs />
          <Depoiments />
          <Patrocinadores />
          <FaleConosco />
          <Footer />
        </ScrollView>
      </View>

      <Header ref={scrollRef} />

      <FloatButton ref={scrollRef} />
    </>
  );
};

export default Home;

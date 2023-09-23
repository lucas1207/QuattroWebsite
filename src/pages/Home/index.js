import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";

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
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);
  const scrollRef = useRef();
  const { scrollPosition, setScrollPosition } = usePositions();
  const { height, width } = useWindowDimensions();

  return (
    <>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        onScroll={(e) => {
          setScrollPosition(e.nativeEvent.contentOffset.y);
        }}
        style={[styles.container, { height, width: width - 1 }]}
      >
        <Carrousel />

        <AboutUs />
        <Depoiments />
        <Patrocinadores />
        <FaleConosco />
        <Footer />
      </ScrollView>
      <Header ref={scrollRef} />

      <FloatButton ref={scrollRef} />
    </>
  );
};

export default Home;

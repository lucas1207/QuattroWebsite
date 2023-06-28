import React, { useMemo, useRef } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";
import Header from "../../components/Header";
import Carrousel from "./components/Carrousel";
import AboutUs from "./components/AboutUs";
import Depoiments from "./components/Depoiments";
import Patrocinadores from "./components/Sponsors"
import Footer from "../../components/Footer";
import FaleConosco from "../Home/components/Contact"

const Home = () => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);


  return (
    <View  style={styles.container}>
      <Carrousel/>
    
      <Header />
      <AboutUs />
      <Depoiments />
      <Patrocinadores/>
      <FaleConosco/>
      <Footer />
      <Header  />
    </View>
  );
};

export default Home;

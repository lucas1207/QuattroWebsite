import React, { useMemo } from "react";
import { View, Text, Image } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";
import Header from "../../components/Header";
import Carrousel from "./components/Carrousel";
import AboutUs from "./components/AboutUs";
import Depoiments from "./components/Depoiments";
import Footer from "../../components/Footer";

const Home = () => {
  const { styleguide, responsive } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
    <View style={styles.container}>
      {/* <Carrousel/> */}
    
      <View style={{ height: 800, width: "100%", backgroundColor: "red" }} />
      <Header />
      <AboutUs />
     
      <Depoiments />
      <Footer />
    </View>
  );
};

export default Home;

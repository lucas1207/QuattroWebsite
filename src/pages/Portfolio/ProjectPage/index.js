import { React, useEffect, useMemo, useRef, useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../hooks/styleguide";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FullImage from "../../../components/FullImage";

const ProjectPage = ({ item, setSelectedItem }) => {
  const { styleguide, responsive, maxWidth } = useStyleguide();
  const styles = useMemo(
    () => createStyles(styleguide, maxWidth),
    [styleguide, maxWidth]
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollViewRef = useRef();
  const { height, width } = useWindowDimensions();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonPress = (side) => {
    scrollViewRef.current?.scrollTo({
      x: side === "left" ? scrollPosition - 500 : scrollPosition + 500,
      y: 0,
      animated: true,
    });
  };

  return (
    <>
      <Header />
      <View
        style={{
          height,
          width: width - 1,

          paddingTop: 110,
          backgroundColor: styleguide.colors.backgroundPrimary,
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={[styles.viewContent]}>
            <Pressable
              onPress={() => setSelectedItem(null)}
              style={styles.viewTop}
            >
              <Ionicons name="chevron-back-outline" size={24} color="#9c9c9c" />

              <Text style={styles.viewTopText}>Voltar</Text>
            </Pressable>

            <View style={styles.containerContent}>
              <View style={styles.viewLeft}>
                <Image source={item.imageUrl} style={styles.imagemCapa} />
                <View style={styles.rowImages}>
                  {item.images && (
                    <>
                      <Pressable
                        onPress={() => handleButtonPress("left")}
                        style={styles.arrowLeft}
                      >
                        <Ionicons
                          name="chevron-back-outline"
                          size={48}
                          color={styleguide.colors.fontPrimary}
                        />
                      </Pressable>

                      <ScrollView
                        onScroll={(e) => {
                          setScrollPosition(e.nativeEvent.contentOffset.x);
                        }}
                        ref={scrollViewRef}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={{ width: "100%" }}
                      >
                        {item.images.map((item) => {
                          return (
                            <Pressable
                              onPress={() => {
                                setSelectedImage(item.url);
                              }}
                            >
                              <Image
                                source={item.url}
                                style={{
                                  height: 100,
                                  width: 100,

                                  marginRight: 30,
                                }}
                              />
                            </Pressable>
                          );
                        })}
                      </ScrollView>

                      <Pressable
                        onPress={() => handleButtonPress("right")}
                        style={styles.arrowLeft}
                      >
                        <Ionicons
                          name="chevron-forward-outline"
                          size={48}
                          color={styleguide.colors.fontPrimary}
                        />
                      </Pressable>
                    </>
                  )}
                </View>
                {item.link !== "" && (
                  <Pressable
                    onPress={() => {
                      Linking.openURL(item.link);
                    }}
                    style={styles.buttonSaibaMais}
                  >
                    <Text style={styles.textSaibaMais}>Saiba Mais</Text>
                  </Pressable>
                )}

                {item.linkPdf !== "" && (
                  <Pressable
                    onPress={() => {
                      Linking.openURL(item.linkPdf);
                    }}
                    style={[styles.buttonLivro]}
                  >
                    <Text style={styles.textSaibaMais}>Abrir Livro</Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.viewRight}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textPronac}>Pronac: {item.pronac}</Text>
                <Text style={styles.textValor}>Valor: {item.value}</Text>
                {item.patrocinadores !== "" && (
                  <Text style={styles.textValor}>
                    Patrocínio: {item.patrocinadores}
                  </Text>
                )}
                <Text style={styles.textDescription}>{item.description}</Text>
              </View>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </View>
      {selectedImage && (
        <FullImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
};

export default ProjectPage;

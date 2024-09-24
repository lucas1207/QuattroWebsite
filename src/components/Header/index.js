import React, { forwardRef, useCallback, useEffect, useMemo } from "react";
import { Pressable, View, Image, Text, Linking, Animated } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";

import LogoQuattro from "../../assets/imgs/LogoQuattro.png";
import Linkedin from "../../assets/svgs/linkedin";
import Facebook from "../../assets/svgs/facebook";
import Youtube from "../../assets/svgs/youtube";
import { usePositions } from "../../hooks/positions";
import { useNavigation, useRoute } from "@react-navigation/native";
import ButtonHeader from "./ButtonHeader";

const Header = forwardRef(function Header(props, ref) {
  const { styleguide, responsive, maxWidth } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);
  const { navigate } = useNavigation();
  const { positions } = usePositions();

  const { name } = useRoute();

  const tabs = ["Portfólio", "Sobre", "Patrocinadores", "Contato"];
  const colors = [
    styleguide.colors.quattroRed,
    styleguide.colors.quattroLightBlue,
    styleguide.colors.quattroYellow,
    styleguide.colors.quattroDarkBlue,
  ];

  const handleButtonPress = useCallback(
    (item) => {
      switch (item) {
        case "Portfólio":
          return navigate("portfolio");
        case "Sobre":
          return name === "Home"
            ? ref.current?.scrollTo({
                x: 0,
                y: positions.aboutUs - 150,
                animated: true,
              })
            : navigate("home");
        case "Patrocinadores":
          return name === "Home"
            ? ref.current?.scrollTo({
                x: 0,
                y: positions.sponsors,
                animated: true,
              })
            : navigate("home");
        case "Contato":
          return name === "Home"
            ? ref.current?.scrollTo({
                x: 0,
                y: positions.contact,
                animated: true,
              })
            : navigate("home");
      }
    },
    [positions]
  );

  return (
    <View onLayout={(e) => {}} style={styles.container}>
      <View style={[styles.contentContainer, { maxWidth }]}>
        <Pressable
          onPress={() => {
            navigate("home");
          }}
          style={styles.buttonQuattro}
        >
          <Image source={LogoQuattro} style={styles.logoQuattro}></Image>
        </Pressable>

        {responsive === "web" ? (
          <View style={styles.viewLinks}>
            {tabs.map((item, index) => (
              <ButtonHeader
                key={index}
                title={item}
                hoverColor={colors[index]}
                onPress={() => {
                  handleButtonPress(item);
                }}
              />
            ))}
          </View>
        ) : null}

        {responsive === "web" ? (
          <View style={styles.viewSocialMedia}>
            <Pressable
              style={styles.buttonSocialMedia}
              onPress={() => {
                Linking.openURL("https://www.facebook.com/quattroprojetos");
              }}
            >
              <Facebook />
            </Pressable>
            <Pressable
              style={styles.buttonSocialMedia}
              onPress={() => {
                Linking.openURL(
                  "https://www.linkedin.com/company/quattro-projetos"
                );
              }}
            >
              <Linkedin />
            </Pressable>
            <Pressable
              style={styles.buttonSocialMedia}
              onPress={() => {
                Linking.openURL("https://www.youtube.com/user/QuattroProjetos");
              }}
            >
              <Youtube />
            </Pressable>
          </View>
        ) : (
          <Pressable style={{ height: 50, width: 50, borderWidth: 1 }} />
        )}
      </View>
    </View>
  );
});

export default Header;

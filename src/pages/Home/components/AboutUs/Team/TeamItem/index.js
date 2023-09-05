import React, { useMemo } from "react";
import { Image, View, Text, Pressable, Linking } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../../hooks/styleguide";

import Linkedin from "../../../../../../assets/svgs/linkedin";
import Facebook from "../../../../../../assets/svgs/facebook";
import Mail from "../../../../../../assets/svgs/mail";

const TeamItem = ({ name, position, avatar, linkedin, email }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={avatar} />

      <View style={{ alignItems: "center", bottom: 85 }}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textPosition}>{position}</Text>

        <View style={styles.viewSocialMedia}>
          <Pressable
            onPress={() => {
              Linking.openURL(linkedin);
            }}
            style={styles.buttonSocialMedia}
          >
            <Linkedin />
          </Pressable>

          <Pressable
            onPress={() => {
              Linking.openURL(`mailto:${email}`);
            }}
            style={styles.buttonSocialMedia}
          >
            <Mail />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TeamItem;

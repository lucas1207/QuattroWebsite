import React, { useMemo } from "react";
import { Image, View, Text, Pressable } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../../../hooks/styleguide";

import Linkedin from "../../../../../../assets/svgs/linkedin";
import Facebook from "../../../../../../assets/svgs/facebook";
import Mail from "../../../../../../assets/svgs/mail";

const TeamItem = ({ name, position, avatar }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={avatar} />

      <View style={{ alignItems: "center", bottom: 85 }}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textPosition}>{position}</Text>

        <View style={styles.viewSocialMedia}>
          <Pressable style={styles.buttonSocialMedia}>
            <Linkedin />
          </Pressable>

          <Pressable style={styles.buttonSocialMedia}>
            <Mail />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TeamItem;

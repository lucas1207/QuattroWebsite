import React, { useEffect, useMemo, useState } from "react";
import { Animated, View, TextInput, Text } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../hooks/styleguide";

const Input = ({
  title,
  value,
  setValue,
  multiline = false,
  error = false,
  textError,
}) => {
  const [positionX, setPositionX] = useState(new Animated.Value(12));
  const [positionY, setPositionY] = useState(new Animated.Value(35));

  const { styleguide } = useStyleguide();
  const styles = useMemo(
    () => createStyles(styleguide, multiline),
    [styleguide]
  );

  const Focus = () => {
    Animated.timing(positionY, {
      toValue: -3,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const Blur = () => {
    Animated.timing(positionY, {
      toValue: 35,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (value !== "") {
      Focus();
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.textInput,
          { transform: [{ translateY: positionY }, { translateX: positionX }] },
        ]}
      >
        {title}
      </Animated.Text>

      <TextInput
        style={[
          styles.input,
          { borderColor: error ? styleguide.colors.quattroRed : "#8b8b8b" },
        ]}
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        multiline={multiline}
        onFocus={() => Focus()}
        onBlur={() => (value === "" ? Blur() : null)}
      />

      {error && <Text style={styles.textError}>{textError}</Text>}
    </View>
  );
};

export default Input;

import React, { useMemo, useRef } from "react";
import { View, Text, ScrollView } from "react-native";

import { createStyles } from "./styles";
import ListItem from "../ListItem";
import { useStyleguide } from "../../../hooks/styleguide";
import { LinearGradient } from "expo-linear-gradient";

const Category = ({ data }) => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);
  console.log("data", data);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{data.title}</Text>

      <View
        style={{ width: "100%", flexDirection: "row" }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ width: "100%", padding: 15}}
        >
          {data.projects.map((item, index) => (
            <ListItem id={index} data={item} />
          ))}
       
        </ScrollView>

        <LinearGradient
         start={[0.5, 0.5]}
         end={[0, 0.5]}
         colors={["#000000b3", "#00000000"]}
            style={{
              height: 150,
              width: 90,
           
              position: "absolute",
              right: 0,
              top: 15,
            }}
          />
      </View>
    </View>
  );
};

export default Category;

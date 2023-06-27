import React, { useMemo } from "react";
import { View, Image, Text } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";
import Background from "../../../../assets/imgs/BackgroundDepoiments.png";
import Yellow from "../../../../assets/svgs/yellow";
import Triangle from '../../../../assets/imgs/RectangleGray2.png'

const Depoiments = () => {
  const { styleguide, responsive } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  
  return (
    <View
      style={[
        styles.container,
        { paddingTop: responsive === "web" ? 167 : 70,
   },
      ]}
    >
      <View style={{flexDirection: 'row', zIndex:  2}}>

    
      <View style={[styles.viewContent]}>
        <Text style={styles.textTitle}>Depoimentos</Text>
        <Text style={styles.textSubtitle}>
          Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio
          texto
        </Text>

        <View>
          <View style={{position: 'absolute', top: -30, left: 5}}>
            <Yellow/>
          </View>
          <Text style={styles.textDepoiments}>
            {'      '}Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to
          </Text>
        </View>

        <Text style={styles.textAuthor}>
          Flavio Enninger
        </Text>

        <Text style={styles.textOcupation}>
          CEO da Quattro Projetos
        </Text>

        <View style={styles.viewBalls}>
          <View style={[styles.ball,{backgroundColor: styleguide.colors.quattroYellow}]}/>
          <View style={styles.ball}/>
          <View style={styles.ball}/>
          <View style={styles.ball}/>
          <View style={styles.ball}/>
        </View>
      </View>

      </View>

      <Image style={[styles.imageTriangle,{
        height: responsive === 'web' ? 167 : 70,

      }]} source={Triangle}/>
      <Image source={Background} style={styles.backgroundImage} />
      <View style={styles.viewFilter} />
    </View>
  );
};

export default Depoiments;

import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Animated, Pressable } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";
import { usePositions } from "../../../../hooks/positions";

import abimex from "../../../../assets/imgs/Patrocinadores/abimex_comFundo.png";
import alcoa from "../../../../assets/imgs/Patrocinadores/alcoa.png";
import alibem from "../../../../assets/imgs/Patrocinadores/alibem.png";
import arcelor from "../../../../assets/imgs/Patrocinadores/arcelor.png";
import arezzo from "../../../../assets/imgs/Patrocinadores/arezzo.png";
import banrisul from "../../../../assets/imgs/Patrocinadores/banrisul.png";
import belgo from "../../../../assets/imgs/Patrocinadores/belgo.png";
import bottero from "../../../../assets/imgs/Patrocinadores/bottero.png";
import braskem from "../../../../assets/imgs/Patrocinadores/braskem.png";
import brde from "../../../../assets/imgs/Patrocinadores/brde.png";
import carboox from "../../../../assets/imgs/Patrocinadores/carboox.png";
import cbmm from "../../../../assets/imgs/Patrocinadores/cbmm.png";
import ceste from "../../../../assets/imgs/Patrocinadores/ceste.png";
import cnhi from "../../../../assets/imgs/Patrocinadores/cnhi.png";
import codeme from "../../../../assets/imgs/Patrocinadores/codeme.png";
import corsan from "../../../../assets/imgs/Patrocinadores/corsan.png";
import danieli from "../../../../assets/imgs/Patrocinadores/danieli.png";
import dimed from "../../../../assets/imgs/Patrocinadores/dimed.png";

import doctorClin from "../../../../assets/imgs/Patrocinadores/doctorClin.png";
import dvgPrecon from "../../../../assets/imgs/Patrocinadores/dvgPrecon.png";
import gerdau from "../../../../assets/imgs/Patrocinadores/gerdau.png";
import harsco from "../../../../assets/imgs/Patrocinadores/harsco.png";
import hydro from "../../../../assets/imgs/Patrocinadores/hydro.png";
import ibar from "../../../../assets/imgs/Patrocinadores/ibar.png";
import invistaVerificarEsseLogo from "../../../../assets/imgs/Patrocinadores/invistaVerificarEsseLogo.png";
import johnDeere from "../../../../assets/imgs/Patrocinadores/johnDeere.png";
import LatasaReciclagem from "../../../../assets/imgs/Patrocinadores/LatasaReciclagem.png";
import lebes from "../../../../assets/imgs/Patrocinadores/lebes.png";
import lojasColombo from "../../../../assets/imgs/Patrocinadores/lojasColombo.png";
import luneli from "../../../../assets/imgs/Patrocinadores/luneli.png";
import lunender from "../../../../assets/imgs/Patrocinadores/lunender.png";
import medabil from "../../../../assets/imgs/Patrocinadores/medabil.png";
import newHolland from "../../../../assets/imgs/Patrocinadores/newHolland.png";
import novelis from "../../../../assets/imgs/Patrocinadores/novelis.png";
import oderich from "../../../../assets/imgs/Patrocinadores/oderich.png";
import perfilAluminio from "../../../../assets/imgs/Patrocinadores/perfilAluminio.png";

import pestanaLeiloes from "../../../../assets/imgs/Patrocinadores/pestanaLeiloes.png";
import petrobras from "../../../../assets/imgs/Patrocinadores/petrobras.png";
import primetals from "../../../../assets/imgs/Patrocinadores/primetals.png";
import queroQuero from "../../../../assets/imgs/Patrocinadores/queroQuero.png";
import rbs from "../../../../assets/imgs/Patrocinadores/rbs.png";
import reciclaBr from "../../../../assets/imgs/Patrocinadores/reciclaBr.png";
import reframax from "../../../../assets/imgs/Patrocinadores/reframax.png";
import renner from "../../../../assets/imgs/Patrocinadores/renner.png";
import rhi from "../../../../assets/imgs/Patrocinadores/rhi.png";
import skf from "../../../../assets/imgs/Patrocinadores/skf.png";
import ternium from "../../../../assets/imgs/Patrocinadores/ternium.png";
import tramontina from "../../../../assets/imgs/Patrocinadores/tramontina.png";
import ufoWay from "../../../../assets/imgs/Patrocinadores/ufoWay.png";
import usiminas from "../../../../assets/imgs/Patrocinadores/usiminas.png";
import vale from "../../../../assets/imgs/Patrocinadores/vale.png";
import whiteMartins from "../../../../assets/imgs/Patrocinadores/whiteMartins.png";
import zaffari from "../../../../assets/imgs/Patrocinadores/zaffari.png";

import Left from "../../../../assets/svgs/left";
import Right from "../../../../assets/svgs/right";
import Page from "./Page";

const Patrocinadores = () => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);
  const { setPositions, scrollPosition } = usePositions();

  const [index, setIndex] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [translateY, setTranslateY] = useState(new Animated.Value(250));
  const [componentHeight, setComponentHeight] = useState(1000);

  useEffect(() => {
    if (scrollPosition > componentHeight - 800) {
      if (!hasAnimated) {
        Animated.timing(translateY, {
          toValue: -5,
          duration: 400,
          useNativeDriver: true,
        }).start();
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
        setHasAnimated(true);
      }
    }
  }, [scrollPosition]);

  const Images1 = [
    abimex,
    alcoa,
    alibem,
    arcelor,
    arezzo,
    banrisul,
    belgo,
    bottero,
    braskem,
    brde,
    carboox,
    cbmm,
    ceste,
    cnhi,
    codeme,
    corsan,
    danieli,
    dimed,
  ];

  const Images2 = [
    doctorClin,
    dvgPrecon,
    gerdau,
    harsco,
    hydro,
    ibar,
    invistaVerificarEsseLogo,
    johnDeere,
    LatasaReciclagem,
    lebes,
    lojasColombo,
    luneli,
    lunender,
    medabil,
    newHolland,
    novelis,
    oderich,
    perfilAluminio,
  ];

  const Images3 = [
    pestanaLeiloes,
    petrobras,
    primetals,
    queroQuero,
    rbs,
    reciclaBr,
    reframax,
    renner,
    rhi,
    skf,
    ternium,
    tramontina,
    ufoWay,
    usiminas,
    vale,
    whiteMartins,
    zaffari,
  ];

  const handleButtonPress = (side) => {
    if (side === "right") {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }

    if (side === "left") {
      if (index === 0) {
        setIndex(2);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <View
      onLayout={(e) => {
        setPositions((prevState) => {
          return { ...prevState, sponsors: e.nativeEvent.layout.y };
        });
        setComponentHeight(e.nativeEvent.layout.y);
      }}
      style={[styles.container, { transform: [{ translateY: -5 }] }]}
    >
      <Animated.View
        style={{
          opacity,
          transform: [{ translateY }],
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={styles.textTitle}>Patrocinadores e Parceiros</Text>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={styles.viewButton}>
            <Pressable
              onPress={() => {
                handleButtonPress("left");
              }}
              style={styles.buttonArrow}
            >
              <Left color={"#9C9C9C"} />
            </Pressable>
          </View>
          {index === 0 && <Page array={Images1} />}
          {index === 1 && <Page array={Images2} />}

          {index === 2 && <Page array={Images3} />}

          <View style={styles.viewButton}>
            <Pressable
              onPress={() => {
                handleButtonPress("right");
              }}
              style={styles.buttonArrow}
            >
              <Right color={"#9C9C9C"} />
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Patrocinadores;

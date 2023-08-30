import React, { useMemo, useRef } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { createStyles } from "./styles";

import Header from "../../components/Header";
import Category from './Category'
import { useStyleguide } from "../../hooks/styleguide";
const Portfolio = () => {
  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const data = [
    {
      title: "Livros",
      projects: [
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
      ],
    },
    {
      title: "Exposições",
      projects: [
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
      ],
    },
    {
      title: "Exposições",
      projects: [
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
        {
          title: "teste 1",
          amount: 200000,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          pronac: 413908,
          coverPhoto: 'www.firebase.com/hashsahash',
          photos: [
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073',
            'www.firebase.com/7789073'
          ]
        },
      ],
    },
  ];

  return <View style={styles.container}>
    <Header/>
    <Text style={styles.textTitle}>Portfólio</Text>
    {data.map((item)=><Category data={item}/>)}
  </View>;
};

export default Portfolio;

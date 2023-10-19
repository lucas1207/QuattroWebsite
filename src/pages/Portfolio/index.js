import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { createStyles } from "./styles";

import Header from "../../components/Header";
import Category from "./Category";

import { getDatabase, ref, onValue } from "firebase/database";

import { useStyleguide } from "../../hooks/styleguide";
import ProjectPage from "./ProjectPage";

const Portfolio = () => {
  const db = getDatabase();

  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const { height } = useWindowDimensions();
  const [selectedItem, setSelectedItem] = useState(null);

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([
    { label: "Livros", value: "livros" },
    { label: "Exposições", value: "exposicoes" },

    { label: "Livros + Exposições", value: "livros/exposicoes" },
    { label: "Centros Culturais", value: "centros" },
    { label: "Concursos culturais", value: "concursos" },
    { label: "Festivais", value: "festivais" },
  ]);

  useEffect(() => {
    setLoading(true);
    let categorizedData = [];
    const projects = ref(db, "projects/");
    onValue(projects, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).forEach((item) => {
          const category = item.category;

          const existingCategory = categorizedData.find(
            (entry) => entry.category === category
          );

          if (existingCategory) {
            existingCategory.projects.push(item);
          } else {
            categorizedData.push({
              category: category,
              projects: [item],
            });
          }
        });

        setProjects(categorizedData);
      } else {
        setProjects({});
      }
    });

    setLoading(false);
  }, []);

  return (
    <>
      {selectedItem ? (
        <ProjectPage item={selectedItem} setSelectedItem={setSelectedItem} />
      ) : (
        <View style={[styles.container, { minHeight: height }]}>
          <Header setSelectedItem={setSelectedItem} />
          <Text style={styles.textTitle}>Portfólio</Text>
          {projects.map((item, index) => {
            return (
              <Category
                setSelectedItem={setSelectedItem}
                item={item}
                key={index}
              />
            );
          })}
        </View>
      )}
    </>
  );
};

export default Portfolio;

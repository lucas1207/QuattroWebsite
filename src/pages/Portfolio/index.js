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
import { ActivityIndicator } from "react-native-web";

const Portfolio = ({route}) => {
  const db = getDatabase();
  const params = route?.params;

 

  const { styleguide } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const { height } = useWindowDimensions();
  const [selectedItem, setSelectedItem] = useState(null);

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let categorizedData = [];

   
   
    const projects = ref(db, "projects/");
    if(!projects.length) {
      onValue(projects, (snapshot) => {
        const data = snapshot.val();
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

          console.log(data)
       

          if(route.params) {
            const itemId = params.itemId
            setSelectedItem((data[itemId]))
          }
          setProjects(categorizedData);
        
      });

    } else {
      if(route.params) {
        const itemId = params.itemId
        setSelectedItem((data[itemId]))
      }
    }
  

    setLoading(false);
  }, [route]);

  console.log(projects)

  return (
    <>
  {loading ? 
    <ActivityIndicator size='large'/>
  : <>
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
  </> }
    </>
  );
};

export default Portfolio;

import React, { useEffect, useMemo, useRef } from 'react';
import {
  View, ScrollView, useWindowDimensions, Pressable,
} from 'react-native';

import { createStyles } from './styles';

import { useStyleguide } from '../../../../hooks/styleguide';

function Carrousel() {
  const { styleguide } = useStyleguide();
  const scrollViewRef = useRef(null);
  const { width } = useWindowDimensions();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  const contentWidth = 2 * width * 0.85;

  const data = [
    '1',
    '2',
  ];

  useEffect(() => {
    console.log('opa');
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  }, [width]);

  return (

    <View style={styles.container}>
      <View style={{ height: '100%', flexDirection: 'row', width: '100%' }}>
        <ScrollView
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ justifyContent: 'flex-end' }}
          style={{ backgroundColor: 'yellow', flex: 1 }}
        >

          {data.map((item, index) => (
            <View style={{
              height: '90%', borderRadius: 32, width: width * 0.8, backgroundColor: 'blue', transform: [{ translateX: -(index * width * 0.85) }],
            }}
            />
          ))}
        </ScrollView>

        <Pressable style={{
          minWidth: 100, width: '5%', height: '100%', position: 'absolute', right: 0, backgroundColor: 'red',
        }}
        />
      </View>
    </View>
  );
}

export default Carrousel;

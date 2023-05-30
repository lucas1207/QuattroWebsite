import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Provider from './src/hooks';
import Home from './src/pages/Home'

import { useFonts } from 'expo-font';

export default function App() {
  return (
    <Provider>
      <Home/>
    </Provider>
  );
}


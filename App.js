import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_700Bold_Italic,
} from "@expo-google-fonts/montserrat";

import { initializeApp } from "firebase/app";

import Provider from "./src/hooks";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppRoutes from "./src/routes";
import Home from "./src/pages/Home";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyA5KnRleT5YPeyTmGLgYoBC_pe7H5uJgVI",
    authDomain: "sitequattro-2c26e.firebaseapp.com",
    databaseURL: "https://sitequattro-2c26e-default-rtdb.firebaseio.com",
    projectId: "sitequattro-2c26e",
    storageBucket: "sitequattro-2c26e.appspot.com",
    messagingSenderId: "364178704508",
    appId: "1:364178704508:web:8e09ad13ead0cc4d4721f9",
    measurementId: "G-JTE10SBVXW",
  };

  const app = initializeApp(firebaseConfig);

  const [fontsLoaded] = useFonts({
    Regular: Montserrat_400Regular,
    Medium: Montserrat_500Medium,
    SemiBold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
    RegularItalic: Montserrat_400Regular_Italic,
    MediumItalic: Montserrat_500Medium_Italic,
    BoldItalic: Montserrat_700Bold_Italic,
  });

  return (
    <Provider>
      <GestureHandlerRootView>
        <AppRoutes />
      </GestureHandlerRootView>
    </Provider>
  );
}

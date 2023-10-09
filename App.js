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
import Portfolio from "./src/pages/Portfolio";

import Provider from "./src/hooks";
import Home from "./src/pages/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAwU4FhYpz9nYbMmbHnA1QvzZethZcKLJY",
    authDomain: "teste-email-2358f.firebaseapp.com",
    projectId: "teste-email-2358f",
    storageBucket: "teste-email-2358f.appspot.com",
    messagingSenderId: "1001469675669",
    appId: "1:1001469675669:web:c9c5b8a42ad9be8fe0f39c",
    measurementId: "G-C620CC4Z2E",
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
        {/* <Home /> */}
        <Portfolio />
      </GestureHandlerRootView>
    </Provider>
  );
}

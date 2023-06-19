import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_700Bold_Italic
} from '@expo-google-fonts/montserrat';


import Provider from './src/hooks';
import Home from './src/pages/Home'

export default function App() {

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
      <Home/>
    </Provider>
  );
}


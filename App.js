import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';


import Provider from './src/hooks';
import Home from './src/pages/Home'

export default function App() {

  const [fontsLoaded] = useFonts({
    Regular: Montserrat_400Regular,
    Medium: Montserrat_500Medium,
    Bold: Montserrat_700Bold,
  });



  return (
    <Provider>
      <Home/>
    </Provider>
  );
}


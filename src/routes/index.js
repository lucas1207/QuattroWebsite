import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BrowserRouter } from "react-router-dom";

const linking = {
  prefixes: ['myapp://', 'http://localhost:19006', 'https://quattroprojetos.com.br'],
  config: {
    screens: {
      home: 'home',
      portfolio: 'portfolio/:itemId',

    },
  },
};


const AppRoutes = ({}) => {
  const Stack = createNativeStackNavigator();

  return (
    <BrowserRouter>
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName={"home"}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="portfolio" component={Portfolio} />
      </Stack.Navigator>
    </NavigationContainer>
    </BrowserRouter>
  );
};

export default AppRoutes;

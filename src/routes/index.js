import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppRoutes = ({}) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

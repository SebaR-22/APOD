import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Details from "../screens/details";
import Cumple from "../screens/cumple";

export default Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalles" component={Details} />
        <Stack.Screen name="Cumple" component={Cumple} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
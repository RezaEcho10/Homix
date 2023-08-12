import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FooterTab from "./Navigation/FooterTab";

export default function App() {
  const Stack = createStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="footerTab" component={FooterTab} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


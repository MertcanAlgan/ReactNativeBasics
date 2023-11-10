import MainPage from "./components/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestPage from "./components/TestPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} options={{
            headerStyle: {
              backgroundColor: '#3498DB', 
            },
          }} />
        <Stack.Screen name="Nav" component={TestPage} options={{
            headerStyle: {
              backgroundColor: '#3498DB', 
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

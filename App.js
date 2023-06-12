import React from "react";

import RegisterScreen from "./screens/Auth/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import Search from "./screens/Home/Search";
import Bottom from "./components/Bottom";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="splashFile"
      >
        <Stack.Screen name="splashFile" component={SplashScreen} />
        <Stack.Screen name="registerFile" component={RegisterScreen} />
        <Stack.Screen name="loginFile" component={LoginScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
  
    </NavigationContainer>
  );
};

export default App;


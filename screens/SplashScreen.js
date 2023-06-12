import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center relative ">
      <StatusBar backgroundColor="gray" />
      <ImageBackground
        source={require("../assets/start2.jpg")}
        className="w-full h-full"
      />
      <View className=" absolute bottom-16  flex-row items-center justify-center">
        <TouchableOpacity onPress={() => navigation.navigate("registerFile")}>
          <Text className="px-16 py-5  bg-yellow-400 rounded-lg text-xl font-bold text-white">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});

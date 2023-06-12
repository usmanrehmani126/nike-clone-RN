import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigtion = useNavigation();
  return (
    <View className="bg-white  flex-1">
      <View className="mt-24">
      <View className="px-32">
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/012/560/876/original/nike-logo-on-transparent-background-free-vector.jpg",
          }}
          className="w-32 h-28"
        />
      </View>
      <View className="mt-12">
       
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            paddingVertical: 5,
            margin: 12,
            marginBottom: 8,
          }}
        >
          <TextInput placeholder="enter your email" className="px-4" />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            paddingVertical: 5,
            margin: 12,
            marginBottom: 8,
          }}
        >
          <TextInput placeholder="enter your password" className="px-4" />
        </View>
      </View>
      <TouchableOpacity className="mt-9 m-5 " onPress={()=>navigtion.navigate("homeScreen")}>
        <Text className="bg-black px-6 py-4 rounded-md text-white text-center ">
          Login{" "}
        </Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center mt-6">
        <Text>Don't have an account?</Text>
        <Text className="text-lg ml-2 font-bold" onPress={() => navigtion.navigate("registerFile")}>Register</Text>
      </View>
      </View>
    
    </View>
  );
};




export default LoginScreen

const styles = StyleSheet.create({})
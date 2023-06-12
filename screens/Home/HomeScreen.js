import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwiperComponent from "../../components/Swiper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import NewShoez from "../../components/NewShoez";
import Bottom from "../../components/Bottom";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className="mb-1">
      {/* Header Component start Here */}
      <View className="mt-6 flex-row items-center justify-between px-8">
        <TouchableOpacity>
          <View className="w-14 h-14 rounded-full bg-white flex-row items-center justify-center text-white">
            <Image
              source={require("../../assets/circle.png")}
              className="w-8 h-8"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="w-14 h-14 rounded-full bg-white flex-row items-center justify-center text-white -mr-6">
            <Image
              source={require("../../assets/ava.png")}
              className="w-10 h-10  rounded-full"
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* Header Component end Here */}

      {/* search Component start Here */}
      <View className="flex-row items-center mt-6">
        <View className="relative  w-72 flex-row items-center h-12 bg-white rounded-md ml-6">
          <TextInput
            placeholder="search your shoe"
            className="px-4  w-full"
            placeholderTextColor="gray"
          />
          <TouchableOpacity className="absolute right-10">
            <Ionicons name="ios-search-outline" size={22} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-12 h-12 bg-yellow-500 rounded-md  flex-row items-center justify-center ml-3">
          <MaterialCommunityIcons name="menu-open" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* search Component end Here */}
      {/* <ScrollView  className="mb-10"> */}
      {/* Swiper Component start Here */}
      <SwiperComponent />
      {/* Swiper Component End Here */}

      {/* Swiper Component start Here */}
      <NewShoez />
      <NewShoez />
      {/* Swiper Component End Here */}
      {/* </ScrollView> */}
      <Bottom />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

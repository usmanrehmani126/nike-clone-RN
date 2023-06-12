import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
const NewShoez = () => {
  return (
    <View className="mt-12">
      <View className="flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">Newest Nike Shoez</Text>
        <View className="flex-row items-center justify-center">
          <Text className="text-[#FFBF00] text-sm font-bold ">See More</Text>
          <Entypo name="chevron-small-right" size={20} color="#FFBF00" />
        </View>
      </View>

      <View className="mt-4 px-2">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="gap-3"
        >
          <View className=" flex-row items-center justify-between bg-white rounded-md py-4">
            <View className="px-2">
              <Text className="text-base font-bold">Nike</Text>
              <Text className="font-semibold">Airmax alpha</Text>
              <Text className="bg-[#FFBF00] px-5 py-2 rounded-md mt-3">
                Add to Cart
              </Text>
            </View>

            <View className="px-4">
              <Image
                source={require("../assets/product11.png")}
                className="w-44 h-32"
              />
            </View>
          </View>
          <View className=" flex-row items-center justify-between bg-white rounded-md py-4">
            <View className="px-2">
              <Text className="text-base font-bold">Nike</Text>
              <Text className="font-semibold">Jordan Master 11</Text>
              <Text className="bg-[#FFBF00] px-5 py-2 rounded-md mt-3">
                Add to Cart
              </Text>
            </View>

            <View className="px-4">
              <Image
                source={require("../assets/sports-2.jpg")}
                className="w-44 h-32"
              />
            </View>
          </View>
          <View className=" flex-row items-center justify-between bg-white rounded-md py-4">
            <View className="px-2">
              <Text className="text-base font-bold">Nike</Text>
              <Text className="font-semibold">Tennis Shoez</Text>
              <Text className="bg-[#FFBF00] px-5 py-2 rounded-md mt-3">
                Add to Cart
              </Text>
            </View>

            <View className="px-4">
              <Image
                source={require("../assets/product-9.png")}
                className="w-44 h-32"
              />
            </View>
          </View>
          <View className=" flex-row items-center justify-between bg-white rounded-md py-4">
            <View className="px-2">
              <Text className="text-base font-bold">Nike</Text>
              <Text className="font-semibold">Football shoes</Text>
              <Text className="bg-[#FFBF00] px-5 py-2 rounded-md mt-3">
                Add to Cart
              </Text>
            </View>

            <View className="px-4">
              <Image
                source={require("../assets/sports-5.jpg")}
                className="w-44 h-32"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewShoez;

const styles = StyleSheet.create({});

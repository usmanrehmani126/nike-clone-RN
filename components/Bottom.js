import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Bottom = () => {
  return (
    <View className="bg-white mx-4 py-3 px-2 rounded-full  mt-1">
      <View className="flex-row items-center justify-between ">
        <TouchableOpacity>
          <Ionicons name="ios-home" size={26} color="#FFBF00" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart" size={26} color="#FFBF00" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="heart" size={26} color="#FFBF00" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="category" size={26} color="#FFBF00" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});

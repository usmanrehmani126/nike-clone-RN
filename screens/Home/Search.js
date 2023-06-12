import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View className="mt-12 px-16 flex-row items-center">
      <View className="border border-gray-300 rounded-md py-1 w-full">
        <TextInput placeholder="search here " className="px-2 " />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});

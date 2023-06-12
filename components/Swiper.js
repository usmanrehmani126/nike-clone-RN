import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import img1 from "../assets/banner.png";
import banner1 from "../assets/banner1.png";
import startThird from "../assets/startThird.jpg";
const SwiperComponent = () => {
  return (
    <View className="mt-8">
      <View style={styles.offerslider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
        >
          <View style={styles.slide}>
            <Image source={img1} style={styles.img} />
          </View>
          <View style={styles.slide}>
            <Image source={banner1} style={styles.img} />
          </View>
          <View style={styles.slide}>
            <Image source={startThird} style={styles.img} />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default SwiperComponent;

const styles = StyleSheet.create({
  offerslider: {
    width: "100%",
    height: 200,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  slide: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

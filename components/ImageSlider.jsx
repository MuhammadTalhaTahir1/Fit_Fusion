import { View, Text } from "react-native";
import React from "react";
import { sliderImage } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

export default function ImageSlider() {
  return (
    <Carousel
      sliderWidth={wp(100)}
      itemWidth={wp(100) - 70}
      data={sliderImage}
      loop={false}
      autoplay={true}
      hasParallaxImages={true}
      renderItem={ItemCard}
      firstItem={1}
      autoplayInterval={4000}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function exercisesDetails() {
  const item = useLocalSearchParams();
  return (
    <View className="flex flex-1 mt-4">
      <View className="shadow-md bg-neutral-200 rounded-b[40px]">
        <Image
          source={item.gifUrl}
          contentFit="cover"
          style={{ height: wp(100), width: wp(100) }}
          className="rounded-b[40px]F"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 rounded-full mt-2 right-2 absolute"
      >
        <Anticons name="closecircle" size={hp(4)} color="#f43f5e" />
      </TouchableOpacity>
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(400).springify()}
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3.5) }}
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(400).springify()}
          className=" text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
        >
          Equipment
          <Text className="font-bold text-neutral-800 tracking-wide">
            ` {item?.equipment}`
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(400).springify()}
          className=" text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
        >
          Secondary Muscles
          <Text className="font-bold text-neutral-800 tracking-wide">
            ` {item?.secondaryMuscles}`
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(400).springify()}
          className=" text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
        >
          Target Muscles
          <Text className="font-bold text-neutral-800 tracking-wide">
            ` {item?.target}`
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(400).springify()}
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3.5) }}
        >
          Instrauctions
        </Animated.Text>
        {item.instructions.split(",").map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay((index + 6) * 100)
                .duration(400)
                .springify()}
              key={instruction}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </View>
  );
}

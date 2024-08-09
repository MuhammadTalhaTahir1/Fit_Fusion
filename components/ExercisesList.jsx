import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image"; //it caches the image as well so dont rerender again and again , so improve the performance of the application
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function ExercisesList({ data }) {
  const router = useRouter();
  return (
    <View className="">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}
const ExerciseCard = ({ item, index, router }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        className="flex py-3 space-y-2 "
        onPress={() =>
          router.push({ pathname: "/exercisesDetails", params: item })
        }
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            // source={require("../assets/images/back.png")}
            source={item.gifUrl}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wider"
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

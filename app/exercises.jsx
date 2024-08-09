import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDb";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExercisesList from "../components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";

const exercises = () => {
  const [exercises, setExercises] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams(); //for using props that are sending from othercomponents ( build in expo router)
  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);
  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodyPart(bodypart);
    // console.log(data);
    setExercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute bg-rose-500 mx-4 rounded-full justify-center items-center flex pr-1"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(4) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} Exercises
          {/* Exercise */}
        </Text>
        <View className="mb-4">
          {/* <ExercisesList /> */}
          <ExercisesList data={exercises}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default exercises;

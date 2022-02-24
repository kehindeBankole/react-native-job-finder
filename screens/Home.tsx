import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useMemo, useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, width, height } from "../constants";
import { Bell, FilterIcon, SearchIcon } from "../assets/svg/Index";
import { useQuery } from "react-query";
import HTMLView from "react-native-htmlview";
import JobCard from "../components/JobCard";
import { useDebounce } from "use-debounce";
import SkeletonLoader from "expo-skeleton-loader";

export default function Home() {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);
  const { isLoading, isError, data, error } = useQuery(["posts", value], () =>
    fetch(`https://findwork.dev/api/jobs?search=${value}`, {
      headers: {
        Authorization: "Token 0e99233b502e4981fa62b1471ffa0e09d7c67e91",
      },
    }).then((res) => res.json())
  );
  if (isLoading)
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image source={require("../assets/loader.gif")} />
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/user.png")} />
        <Bell />
      </View>
      <View style={[styles.header, styles.count]}>
        <Text style={styles.countNumber}>
          {data?.results.length} jobs found
        </Text>
      </View>
      <FlatList
        data={data?.results}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => <JobCard item={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.search}>
        <SearchIcon />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <FilterIcon />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  search: {
    width: "100%",
    height: 52,
    backgroundColor: colors.primaryBlue,
    borderRadius: 12,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: "80%",
    padding: 10,
    bottom: 0,
    fontSize: 15,
    color: colors.white,
    fontFamily: "Poppins_500Medium",
    borderRightColor: colors.white,
    borderWidth: 1,
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    marginRight: 10,
  },
  count: {
    marginTop: 30,
    marginBottom: 16,
  },
  countNumber: {
    color: colors.black,
    fontSize: 13,
    fontFamily: "Poppins_700Bold",
  },
});

{
  /* <HTMLView value={data.data[0].description} stylesheet={styles} /> */
}
// async function clear() {
//   try {
//     await AsyncStorage.clear();
//   } catch (e) {
//     // clear error
//   }

//   console.log("Done.");
// }

// <TouchableOpacity onPress={clear}>
//         <Text>clear</Text>
//       </TouchableOpacity>

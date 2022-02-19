import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants";
import { Bell, FilterIcon, SearchIcon } from "../assets/svg/Index";

export default function Home() {
  const [text, onChangeText] = React.useState("Product Designer in Bronx NY");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchIcon />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <FilterIcon />
      </View>
      <View style={styles.header}>
        <Image source={require("../assets/user.png")} />
        <Bell />
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
});

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

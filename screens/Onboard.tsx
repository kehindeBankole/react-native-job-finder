import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Onboard({ navigation }: { navigation: any }) {
  async function getStarted() {
    try {
      await AsyncStorage.setItem("storage_Key", "false");
      navigation.replace("Home");
    } catch (e) {
      // saving error
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ position: "relative", paddingBottom: 90 }}>
        <Image source={require("../assets/onboardimage.png")} />
        <ImageBackground
          source={require("../assets/blur.png")}
          style={styles.blur}
        />
        <Image
          source={require("../assets/Exclude.png")}
          style={{ position: "absolute", bottom: 70, left: 0 }}
        />
        <Text style={styles.title}>Climb higher with JobSeek app</Text>
      </ScrollView>

      <TouchableOpacity style={styles.btn} onPress={getStarted}>
        <Text style={styles.btnText}>Start browsing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  blur: {
    width: 267,
    height: 267,
    position: "absolute",
    bottom: 200,
    left: 70,
    zIndex: -1,
    borderRadius: 1000,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    color: colors.white,
    marginTop: -100,
    width: 273,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: colors.white,
    width: 250,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.primaryBlue,
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    textTransform: "uppercase",
  },
});

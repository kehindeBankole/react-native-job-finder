import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Onboard from "../screens/Onboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [value, setValue] = useState<string | null>(null);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("storage_Key");
      if (value !== null) {
        setValue(value);
        AsyncStorage.setItem("storage_Key", "false");
      }
      setValue(null);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {value === null && <Stack.Screen name="Board" component={Onboard} />}

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

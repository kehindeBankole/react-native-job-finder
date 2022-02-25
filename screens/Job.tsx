import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Job({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { itemId } = route.params;
  return (
    <View>
      <TouchableOpacity onPress={() => console.log(route)}>
        <Text>{itemId}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

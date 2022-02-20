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
import React from "react";
import { colors } from "../constants";

export default function JobCard({ item }: { item: any }) {
  return (
    <View style={styles.jobCard}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/toptal.png")}
          style={{ alignSelf: "center" }}
        />
        <View style={{ marginLeft: 8, alignSelf: "center" }}>
          <Text style={{ ...styles.jobName, width: 200 }} numberOfLines={1}>
            {item.item.title}
          </Text>
          <Text
            style={{
              ...styles.jobName,
              opacity: 0.8,
              fontSize: 12,
              fontFamily: "Poppins_500Medium",
            }}
          >
            {item.item.company_name}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.badge}>
          <Text
            style={{
              ...styles.jobName,
              opacity: 0.8,
              fontSize: 12,
              fontFamily: "Poppins_500Medium",
            }}
          >
            ssd
          </Text>
        </View>
        <Text
          style={{
            ...styles.jobName,
            opacity: 0.8,
            fontSize: 12,
            fontFamily: "Poppins_400Regular",
          }}
        >
          $100k - $120k/yearly
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  jobCard: {
    height: 113,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  jobName: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: "Poppins_600SemiBold",
    textTransform: "capitalize",
  },
  badge: {
    backgroundColor: colors.badgeBg,
    height: 21,
    borderRadius: 25,
    width: 89,
  },
});

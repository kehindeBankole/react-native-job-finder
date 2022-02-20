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
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../constants";
export default function JobCard({ item }: { item: any }) {
  const [col, setCol] = useState(["red", "blue", "green", "purple"]);
  const [color, setColor] = useState("red");
  useEffect(() => {
    setColor(col[Math.floor(Math.random() * col.length)]);
  }, []);
  return (
    <View style={styles.jobCard}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 5,
            backgroundColor: color,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: colors.white, fontFamily: "Poppins_700Bold" }}>
            {item.item.company_name[0]}
          </Text>
        </View>
        <View style={{ marginLeft: 8, alignSelf: "center" }}>
          <Text style={{ ...styles.jobName, width: 200 }} numberOfLines={1}>
            {item.item.role}
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
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {item.item.keywords.slice(0, 2).map((elem: any, index: any) => (
            <View style={styles.badge}>
              <Text
                style={{
                  ...styles.jobName,
                  opacity: 0.8,
                  fontSize: 12,
                  fontFamily: "Poppins_500Medium",
                }}
              >
                {elem}
              </Text>
            </View>
          ))}
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
    marginRight: 5,
    paddingHorizontal: 10,
  },
});

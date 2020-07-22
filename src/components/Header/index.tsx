import React from "react";
import Constants from "expo-constants";

import { View, Image, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

const logo = require("../../../assets/Nubank_Logo.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Image source={logo}></Image>
        <Text style={styles.headerText}>Eduardo</Text>
      </View>

      <Icon name="keyboard-arrow-down" size={28} color="#fff"></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 25 + Constants.statusBarHeight,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {},
  headerText: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    color: "#fff",
    marginLeft: 8,
  },
});

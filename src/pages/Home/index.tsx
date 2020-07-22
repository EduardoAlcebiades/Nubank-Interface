import React from "react";

import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Menu />
        <Cards />
      </View>

      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    // maxHeight: 460,
    zIndex: 5,
  },
});

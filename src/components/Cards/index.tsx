import React from "react";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";

export default function Cards() {
  const cardContent = [{}, {}, {}];

  function handleRenderCards() {
    return <View style={styles.card}></View>;
  }

  return (
    // <ScrollView
    //   removeClippedSubviews
    //   persistentScrollbar
    //   style={styles.cardContainer}
    // >
    //   <FlatList
    //     data={cardContent}
    //     renderItem={handleRenderCards}
    //     numColumns={1}
    //   ></FlatList>
    // </ScrollView>

    <View style={styles.cardContainer}>
      <View style={styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    left: 0,
    right: 0,
    top: 530,
  },
  card: {
    flex: 1,
    maxHeight: 345,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
});

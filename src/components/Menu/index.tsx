import React from "react";

import QRCode from "react-native-qrcode";

import { View, StyleSheet } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <QRCode
          value="https://rocketseat.com.br/"
          size={80}
          bgColor="#FFF"
          fgColor="#8B10AE"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: { overflow: "hidden" },
});

import React, { ReactElement } from "react";

import { View, StyleSheet, Text } from "react-native";
import {
  AntDesign,
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { ScrollView, RectButton } from "react-native-gesture-handler";

interface Item {
  icon: JSX.Element;
  text: string;
}

export default function Tabs() {
  const iconColor = "#fff";
  const iconSize = 24;

  const items: Item[] = [
    {
      icon: <AntDesign name="adduser" size={iconSize} color={iconColor} />,
      text: "Indicar amigos",
    },
    {
      icon: (
        <SimpleLineIcons
          name="screen-smartphone"
          size={iconSize}
          color={iconColor}
        />
      ),
      text: "Recarga de celular",
    },
    {
      icon: <FontAwesome name="money" size={iconSize} color={iconColor} />,
      text: "Dividir valor",
    },
    {
      icon: (
        <FontAwesome5
          name="hand-holding-usd"
          size={iconSize}
          color={iconColor}
        />
      ),
      text: "Doação",
    },
    {
      icon: (
        <MaterialIcons name="attach-money" size={iconSize} color={iconColor} />
      ),
      text: "Depoistar",
    },
    {
      icon: (
        <MaterialIcons name="attach-money" size={iconSize} color={iconColor} />
      ),
      text: "Transferir",
    },
    {
      icon: <FontAwesome name="sliders" size={iconSize} color={iconColor} />,
      text: "Ajustar limite",
    },
    {
      icon: (
        <MaterialIcons name="help-outline" size={iconSize} color={iconColor} />
      ),
      text: "Me ajuda",
    },
    {
      icon: <FontAwesome name="barcode" size={iconSize} color={iconColor} />,
      text: "Pagar",
    },
    {
      icon: <Feather name="unlock" size={iconSize} color={iconColor} />,
      text: "Bloquear cartão",
    },
    {
      icon: <AntDesign name="creditcard" size={iconSize} color={iconColor} />,
      text: "Cartão virtual",
    },
    {
      icon: <MaterialIcons name="sort" size={iconSize} color={iconColor} />,
      text: "Organizar atalhos",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {items.map((item) => (
          <RectButton style={styles.item}>
            {item.icon}
            <Text style={styles.itemText}>{item.text}</Text>
          </RectButton>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 95,
    marginTop: 20,
    marginBottom: 25,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  item: {
    width: 95,
    height: 95,
    backgroundColor: "rgba(255, 255, 255, .1)",
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  itemText: {
    color: "#fff",
    fontSize: 14,
  },
});

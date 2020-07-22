import React from "react";

import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style={"light"} backgroundColor="#81269d" translucent />
      <Routes />
    </>
  );
}

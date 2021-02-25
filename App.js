import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Map from "./components/Map";

const dimensions = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <Map dimensions={dimensions}></Map>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

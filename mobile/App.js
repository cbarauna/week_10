import React from "react";
import { StyleSheet, Text, YellowBox, StatusBar } from "react-native";
import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized Websocket"]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}

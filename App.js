import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

import Alert from "./Alert";
import Button from "./Button";
import NativeModal from "./NativeModal";
import SwipeableModal from "./SwipeableModal";
import ScrollableModal from "./ScrollableModal";
import ScrollableSwipeableModal from "./ScrollableSwipeableModal";

const uri =
  "https://cdn-images-1.medium.com/max/800/1*KANHihva9OdXx2-V5EDn3g.png";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.logo} />
        <Alert />
        <NativeModal />
        <SwipeableModal />
        <ScrollableModal />
        <ScrollableSwipeableModal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 120,
    height: 120
  }
});

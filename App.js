import React, { Component } from "react";
import { Alert, Image, StyleSheet, ScrollView } from "react-native";

import Button from "./Button";
import NativeModal from "./NativeModal";

const uri =
  "https://cdn-images-1.medium.com/max/800/1*KANHihva9OdXx2-V5EDn3g.png";

export default class App extends Component {
  handleAlert = () => {
    Alert.alert("A simple alert", "With a simple message", [
      {
        text: "Cancel",
        onPress: () => alert("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => alert("OK Pressed") }
    ]);
  };

  handleSwipe = () => alert("Swipe");
  handleScroll = () => alert("Scroll");
  handleBoth = () => alert("Scrollable and Swipeable");

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri }} style={styles.logo} />
        <Button color="#FC2D1E" label="Alert" onPress={this.handleAlert} />
        <NativeModal />
        <Button
          color="#F7D426"
          label="Swipeable Modal"
          onPress={this.handleSwipe}
        />
        <Button
          color="#00D774"
          label="Scrollable Modal"
          onPress={this.handleScroll}
        />
        <Button
          color="#8B1E98"
          label="Scrollable + Swipeable"
          onPress={this.handleBoth}
        />
      </ScrollView>
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

import React, { Component } from 'react';
import { Alert, TouchableOpacity, Image, StyleSheet, Text, ScrollView } from 'react-native';

const uri = "https://cdn-images-1.medium.com/max/800/1*KANHihva9OdXx2-V5EDn3g.png"

const Button = ({ color, onPress, label }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
    <Text style={styles.buttonLabel}>{label.toUpperCase()}</Text>
  </TouchableOpacity>
)

export default class App extends Component {
  handleAlert = () => {
    Alert.alert('A simple alert', 'With a simple message', [
      {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.warn('OK Pressed')},
    ])
  }

  handleNative = () => console.warn("Native")
  handleSwipe = () => console.warn("Swipe")
  handleScroll = () => console.warn("Scroll")
  handleBoth = () => console.warn("Scrollable and Swipeable")

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri }} style={styles.logo} />
        <Button color="#FC2D1E" label="Alert" onPress={this.handleAlert} />
        <Button color="#F67700" label="Native Modal" onPress={this.handleNative} />
        <Button color="#F7D426" label="Swipeable Modal" onPress={this.handleSwipe} />
        <Button color="#00D774" label="Scrollable Modal" onPress={this.handleScroll} />
        <Button color="#8B1E98" label="Scrollable + Swipeable" onPress={this.handleBoth} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120
  },
  button: {
    alignItems: 'center',
    borderRadius: 4,
    margin: 12,
    width: "80%",
  },
  buttonLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    padding: 12,
  }
});

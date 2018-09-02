import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Button from "./Button";

import Modal from "react-native-modal";

class ScrollableModal extends Component {
  state = {
    visible: false
  };

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.2}
          swipeDirection="left"
          onSwipe={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView>
              <Text style={styles.description}>
                {
                  "This is a scrollable modal from the 'react-native-modal' library.\n\nYou can swipe it left to close it."
                }
              </Text>
              <Button
                color="#00D774"
                label="Close Modal"
                onPress={this.closeModal}
              />
            </ScrollView>
          </View>
        </Modal>
        <Button
          color="#00D774"
          label="Scrollable Modal"
          onPress={this.openModal}
        />
      </View>
    );
  }
}

export default ScrollableModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 60,
    marginVertical: 200
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontSize: 18
  }
});

import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import Button from "./Button";

import Modal from "react-native-modalbox";

class ScrollableSwipeableModal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <View style={styles.container}>
        <Modal
          style={styles.modalContainer}
          swipeToClose={true}
          swipeArea={20}
          swipeThreshold={50}
          isOpen={this.state.isOpen}
          onClosed={this.closeModal}
          backdropColor={"transparent"}
          backdropPressToClose={false}
          backdrop={false}
          entry={"top"}
          position={"center"}
        >
          <View>
            <View>
              <Text style={styles.description}>
                {[
                  "This is a swipeable modal from the 'react-native-modalbox' library.\n\n"
                ]}
              </Text>
              <Button
                color="#8B1E98"
                label="Close Modal"
                onPress={this.closeModal}
              />
            </View>
          </View>
        </Modal>
        <Button
          color="#8B1E98"
          label="Scrollable + Swipeable"
          onPress={this.openModal}
        />
      </View>
    );
  }
}

export default ScrollableSwipeableModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2
  },
  description: {
    padding: 20,
    fontSize: 18
  }
});

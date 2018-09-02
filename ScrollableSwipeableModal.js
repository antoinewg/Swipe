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
          style={[
            styles.container,
            {
              height: 600
            }
          ]}
          swipeArea={20}
          isOpen={this.state.isOpen}
        >
          <ScrollView>
            <View style={{ width: 300 }}>
              <Text style={styles.description}>
                {[
                  "This is a swipeable modal from the 'react-native-modalbox' library.\n\n",
                  "You can swipe it left to close it."
                ]}
              </Text>
              <Button
                color="#8B1E98"
                label="Close Modal"
                onPress={this.closeModal}
              />
            </View>
          </ScrollView>
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
    padding: 20,
    fontSize: 18
  }
});

import React, { Fragment, Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
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
      <Fragment>
        <Modal
          style={styles.container}
          swipeToClose={true}
          swipeArea={20}
          swipeThreshold={50}
          isOpen={this.state.isOpen}
          onClosed={this.closeModal}
          backdropOpacity={0.1}
        >
          <ScrollView>
            <View style={styles.scrollIndicator} />
            <View style={styles.thresholdIndicator} />
            <Text style={styles.description}>
              {[
                "This is a swipeable modal from the 'react-native-modalbox' library.\n\n",
                "As before, you can click on the button below to close the modal.\n\n",
                "You can also scroll inside the modal.\n\n",
                "Furthermore, you can swipe the modal down.\n\n",
                "To do that, you need to place your finger on the top 'swipeArea' (20 here) pixels, ",
                "and drag at least 'swipeThreshold' (50 here).\n\n",
                "You can still press the backdrop to close the modal."
              ]}
            </Text>
            <Button
              color="#8B1E98"
              label="Close Modal"
              onPress={this.closeModal}
            />
          </ScrollView>
        </Modal>

        <Button
          color="#8B1E98"
          label="Scrollable + Swipeable"
          onPress={this.openModal}
        />
      </Fragment>
    );
  }
}

export default ScrollableSwipeableModal;

const styles = StyleSheet.create({
  container: {
    width: 260,
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
  },
  scrollIndicator: {
    height: 20,
    width: 1,
    backgroundColor: "red",
    position: "absolute"
  },
  thresholdIndicator: {
    height: 50,
    width: 1,
    backgroundColor: "green",
    position: "absolute",
    right: 0
  }
});

import React, { Component } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import Button from "./Button";

class NativeModal extends Component {
  state = {
    modalVisible: false
  };

  openModal = () => this.setState({ modalVisible: true });
  closeModal = () => this.setState({ modalVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() =>
            alert("Modal has been closed with the back button.")
          }
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {
                "A native modal is easy enough to implement but the risk is that the user can feel trapped if they can't close the Modal. \n\nThe only way they can is by clicking on:"
              }
            </Text>
            <Button
              color="#F67700"
              label="Close Modal"
              onPress={this.closeModal}
            />
          </View>
        </Modal>

        <Button color="#F67700" label="Native Modal" onPress={this.openModal} />
      </View>
    );
  }
}

export default NativeModal;

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

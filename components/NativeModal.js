import React, { Fragment, Component } from "react";
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
      <Fragment>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {[
                "A native modal is easy enough to implement but the risk is that ",
                "the user can feel trapped if they can't close the Modal. \n\n",
                "The only way they can is by clicking on:"
              ]}
            </Text>
            <Button
              color="#F67700"
              label="Close Modal"
              onPress={this.closeModal}
            />
          </View>
        </Modal>

        <Button color="#F67700" label="Native Modal" onPress={this.openModal} />
      </Fragment>
    );
  }
}

export default NativeModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 60,
    marginVertical: 120
  },
  description: {
    padding: 20,
    fontSize: 18
  }
});

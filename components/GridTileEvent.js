
import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";



export default GridTileEvent = props => {
    const [modalVisible, setModalVisible] = useState(false);
    return (



        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setModalVisible(true)}


        >
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >

             
                <Pressable
                    style={[ styles.modalView]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.modalText}>{props.text}</Text>
                </Pressable>

            </Modal>

            <Text style={styles.gridText}>{props.text}</Text>


        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    itemContainer: {

        flex: 1,
        flexDirection: 'column',

        margin: 20,
        padding: 15,
        width: 300,
        height: 100,
        backgroundColor: '#da7f8f',
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10
    },
    gridText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        color: "#faf3f3"

    },
    modalView: {
        flex: 0.85,
        flexDirection: 'column',

        margin: 20,
        marginTop: 140,
        padding: 20,
        width: 374,
        height: 100,
        backgroundColor: '#da7f8f',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10
      },
      modalText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "#faf3f3"
      }
});

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { buttonHeight, buttonWidth } from "./constants";

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnBody}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnBody: {
        backgroundColor: "#19A7CE",
        height: buttonHeight,
        width: buttonWidth,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000",
    },
});

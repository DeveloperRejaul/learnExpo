import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { todoStore } from "./store/todoStore";

export default function Screen02() {
    return (
        <>
            {todoStore.getTodo?.map((data, index) => (
                <View key={index} style={styles.containerItem}>
                    <Text>{data}</Text>
                </View>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    containerItem: {
        height: 50,
        width: "100%",
        backgroundColor: "#C2DEDC",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    btn: {
        flexDirection: "row",
        columnGap: 10,
    },
});

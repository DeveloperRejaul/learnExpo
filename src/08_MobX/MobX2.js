import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";
import { Mycounter } from "./CRUD";

export default function MobX2() {
    const CounterView = observer(({}) => (
        <Text>Count : {Mycounter.count}</Text>
    ));

    return (
        <View>
            <CounterView />
        </View>
    );
}

const styles = StyleSheet.create({});

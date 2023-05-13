import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";
import { Mycounter } from "./CRUD";

export default function MobX() {
    // using style 01
    const CounterView = observer(({ counter }) => (
        <Text>Count :{counter.count}</Text>
    ));

    // using style 02
    const NewCount = observer(() => <Text> Count {Mycounter.count}</Text>);

    return (
        <View>
            <NewCount />
            <CounterView counter={Mycounter} />
            <Text onPress={() => Mycounter.increment()}>Increment</Text>
            <Text onPress={() => Mycounter.decrement()}>Decrement</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

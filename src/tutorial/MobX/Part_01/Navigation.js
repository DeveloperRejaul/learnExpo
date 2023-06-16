import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./HomeScreen";
import Screen02 from "./screen02";
import { todoStore } from "./store/todoStore";

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HOME" component={Home} />
            <Stack.Screen name="SCREEN02" component={Screen02} />
        </Stack.Navigator>
    );
}

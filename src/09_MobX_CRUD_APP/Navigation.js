import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputView from "./InputView";
import TodosView from "./TodosView";

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Todo"
                component={TodosView}
                options={{
                    headerSearchBarOptions: {
                        inputType: "text",
                    },
                }}
            />
            <Stack.Screen name="Input" component={InputView} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});

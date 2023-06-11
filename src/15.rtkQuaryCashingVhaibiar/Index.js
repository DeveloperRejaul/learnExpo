import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./screen/Sreeen1";
import Screen2 from "./screen/Screen2";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { showModel } from "./rtk/features/addTask/addSlice";
const Stack = createNativeStackNavigator();

export default function RtkCashingBehavior() {
    const dispatch = useDispatch();

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Screen1}
                name="screen1"
                options={{
                    headerRight: () => (
                        <Text onPress={() => dispatch(showModel())}>Add </Text>
                    ),
                }}
            />
            <Stack.Screen component={Screen2} name="screen2" />
        </Stack.Navigator>
    );
}

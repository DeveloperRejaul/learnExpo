import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";
import { createTask } from "./features/crudSlice";
import { fetchTask } from "./features/tasksSlice";
export default function Index() {
    const disPatch = useDispatch();
    const count = useSelector((state) => state.counter);
    const { tasks } = useSelector((state) => state.tasks);
    console.log(tasks.newTask);

    return (
        <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
            <Text>Count {count.value}</Text>
            <Text onPress={() => disPatch(increment())}>Increment</Text>
            <Text onPress={() => disPatch(decrement())}>Decrement</Text>
            <Text onPress={() => disPatch(createTask())}>Create Task</Text>
            <Text onPress={() => disPatch(fetchTask())}>Fetch Task</Text>
        </Stack>
    );
}

const styles = StyleSheet.create({});

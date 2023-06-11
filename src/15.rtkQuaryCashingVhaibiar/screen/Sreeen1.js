import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetPostQuery } from "../rtk/features/api/apiSlice";
import { HStack, Pressable, Box } from "native-base";
import { useDeleteTaskMutation } from "../rtk/features/deleteTask/deleTackApi";
import { useSelector } from "react-redux";
import Model from "./Model";

export default function Sreeen1({ navigation }) {
    const { data: task, isError, isLoading, isSuccess } = useGetPostQuery();
    const [deleteTask, { DisError, DisLoading, DisSuccess }] =
        useDeleteTaskMutation();

    let content = null;

    if (isError) content = <Text>Error </Text>;
    if (isLoading) content = <Text> Loading.. </Text>;
    if (isSuccess) content = <Text> Success </Text>;

    if (DisError) content = <Text>Error </Text>;
    if (DisLoading) content = <Text> Loading.. </Text>;
    if (DisSuccess) content = <Text> Success </Text>;

    return (
        <View>
            {content}
            <FlatList
                data={task?.newTask}
                renderItem={({ item, index }) => (
                    <HStack
                        key={index}
                        style={styles.item}
                        justifyContent={"space-between"}
                    >
                        <Text>{item.title}</Text>
                        <HStack space={"2"}>
                            <Pressable
                                onPress={() =>
                                    navigation.navigate("screen2", {
                                        data: item.title,
                                        id: item._id,
                                    })
                                }
                            >
                                <Text>Edit</Text>
                            </Pressable>

                            <Pressable onPress={() => deleteTask(item._id)}>
                                <Text>Delete</Text>
                            </Pressable>
                        </HStack>
                    </HStack>
                )}
            />
            <Model />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 5,
        backgroundColor: "#ddd",
    },
});
